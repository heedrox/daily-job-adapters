import transcoder from './app/transcoder'
import fs from 'fs'
import slackUploadFile from "./app/slack-upload-file";

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const ko = (error) => console.error('Something went wrong. ',error);
const endJob = (data) => {
    console.log("Job end successfully!");
    console.log("Created file? ok: ",data.ok);
    console.log("Permalink: ",data.file.permalink);
    console.log("*** Dont't worry, be happy! :) ");
};

const config = readJson('config.json');
transcoder(config.source, config.destination)
    .then(() => slackUploadFile(config.slackToken, config.destination, config.channel))
    .then(endJob)
    .catch(ko);



