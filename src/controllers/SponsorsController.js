import SponsorsModel from '../models/sponsors.js';

export const getAllSponsors = async () => {
	const sponsors = await SponsorsModel.find({});
	return sponsors;
}
export const getTotalInternationals= async () => {
	const sponsors = await SponsorsModel.find({});
	const totalInternationalSponsor=await sponsors.reduce((acc,sponsor)=>{
        if(sponsor.location==="international"){
            acc++;
        }
        return acc;
    },0);
    return totalInternationalSponsor;
}



