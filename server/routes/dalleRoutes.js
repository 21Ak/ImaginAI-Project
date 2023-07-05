import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai'; 

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

// demo router
router.route('/').get((req, res) => {
    res.send('Hello from ImaginAI!');
});

// image generation
router.route('/').post(async (req, res)=> {
    try {
        const { prompt } = req.body; // prompt comes from the frontend
        const aiResponse = await openai.createImage({
            prompt,
            n: 1, 
            size: '1024x1024',
            response_format: 'b64_json', 
        });

        const image = aiResponse.data.data[0].b64_json; // getting image out of response
        res.status(200).json({ photo: image }) // sending the image back to frontend

    } catch (error) {
        console.log(error); 
        res.status(500).send(error?.response.data.error.message || "Error! Seek help!");
    }
}); 
export default router;