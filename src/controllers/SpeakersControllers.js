import SpeakersModel from '../models/speakers.js';

export const getAllSpeakers = async () => {
	const speakers = await SpeakersModel.find({});
	return speakers;
}
export const getTotalSpeakers=async ()=>{
    const total= await getAllSpeakers();
    return total.length;
}

export const getCountrys= async ()=>{
    const speakers= await SpeakersModel.find({});
     const countrys=await speakers.reduce((acc,speaker)=>{
         if(!acc.includes(speaker.country)){
             acc.push(speaker.country)
         }
         return acc;
     },[]);
     return countrys;
}
