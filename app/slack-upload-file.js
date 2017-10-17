import * as path from "path";
import fs from 'fs';
import {WebClient} from "@slack/client/index";

export default function slackUploadFile(token, file, channel) {

    const web = new WebClient(token);
    const filename = path.basename(file);
    const streamOpts = {
        file: fs.createReadStream(file),
        channels : channel
    };

    return web.files.upload(filename, streamOpts);
}

