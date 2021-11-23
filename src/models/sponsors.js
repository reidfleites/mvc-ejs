import mongoose from 'mongoose';

const speakersSchema = mongoose.Schema({
	name: String,
	location: String
});
const SponsorsModel = mongoose.model("Sponsors", speakersSchema);

export default SponsorsModel;