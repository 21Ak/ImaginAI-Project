import FileSaver from 'file-saver'; 

import { surpriseMePrompts } from '../constants'; 

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length); // getting a random index from 1 to 49, ie, number of random prompts
    const randomPrompt = surpriseMePrompts[randomIndex]; // getting random prompt

    if (randomPrompt === prompt) return getRandomPrompt(prompt); 
    
    return randomPrompt; 
}

export async function downloadImage(id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}