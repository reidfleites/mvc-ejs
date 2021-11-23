import mongoose from 'mongoose';

const speakersSchema = mongoose.Schema({
	name: String,
	country: String
});
const SpeakersModel = mongoose.model("Speaker", speakersSchema);

export default SpeakersModel;