import * as SpeakersControllers from './controllers/SpeakersControllers.js';
import * as PresentationsController from './controllers/PresentationController.js';
import * as SponsorsController from './controllers/SponsorsController.js';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = process.env.PORT || 5000;

const mongoConnectString = process.env.MONGO_URI;
mongoose.connect(mongoConnectString);





const staticDirectory = path.join(__dirname, './public');
app.use(express.static(staticDirectory));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.get('/', async(req, res) => {
    res.render('index', {
        pageTitle: "Welcome",
        presenters: await SpeakersControllers.getTotalSpeakers(),
        presentations:await PresentationsController.getTotal(),
        countrys: await SpeakersControllers.getCountrys(),
        totalInternationalSponsors: await SponsorsController.getTotalInternationals(),
        rooms: await PresentationsController.getRooms()
       
    });
});
app.get('/sponsors', async(req, res) => {
    
    res.render('sponsors', {
        pageTitle: "Sponsors",
        sponsors: await SponsorsController.getAllSponsors()
    });
});
app.get('/speakers', async(req, res) => {
    
    res.render('speakers', {
        pageTitle: "Speakers",
        speakers: await SpeakersControllers.getAllSpeakers()
    });
});
app.get('/presentations', async(req, res) => {
    res.render('presentations', {
        pageTitle: "Presentations",
        presentations: await PresentationsController.getAllPresentations()
    });
});

app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
})
