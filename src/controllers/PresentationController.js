import PresentationsModel from '../models/presentations.js';

export const getAllPresentations = async () => {
	const presentations = await PresentationsModel.find({});
	return presentations;
}
export const getTotal = async () => {
	const total = await getAllPresentations();
	return total.length;
}
export const getRooms=async()=>{
    const presentations=await PresentationsModel.find({});
    const rooms=await presentations.reduce((acc,presentation)=>{
        if(!acc.includes(presentation.room)){
            acc.push(presentation.room);
        }
        return acc;
    },[]);
    return rooms;
}
