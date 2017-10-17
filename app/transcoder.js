import ffmpeg from 'fluent-ffmpeg'

export default function transcoder(sourceFile, destinationFile) {

    return new Promise(
        function (resolve, reject) {
            const proc = new ffmpeg({source: sourceFile, nolog: true})
            proc.withSize('800x?')
                .toFormat('mp4')
                .on('end', function () {
                    resolve();
                })
                .on('error', function (err) {
                    reject(err);
                })
                .saveToFile(destinationFile);
        });

}

