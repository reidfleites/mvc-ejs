import mongoose from 'mongoose';

const speakersSchema = mongoose.Schema({
	title: String,
	room: String
});
const PresentationsModel = mongoose.model("Presentations", speakersSchema);

export default PresentationsModel;