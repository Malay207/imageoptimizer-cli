const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
import chalk from 'chalk';
const fs=require('fs')
const path=require("path");
export async function videooptimize(arg){
    try {
        if (fs.lstatSync(arg._[1]).isFile()) {
            let dir=path.dirname(arg._[1]);
            let file=path.basename(arg._[1]);
            let outpath=path.join(dir,"optimized",file);
            let size;
            if(arg._[2]==="240p"){
                size="426x240"
            }
            else if(arg._[2]==="144p")
            {
                size="222x144"
            }
            else if(arg._[2]==="1080p"){
                size="1920x1080"
            }
            const extension = path.extname(arg._[1]).toLowerCase();
            if (extension === '.mp4' || extension === '.mov' || extension === '.avi') {
                new ffmpeg(arg._[1])
  .output(outpath)
  .videoCodec('libx264')
  .size(size)
  .on('error', (err) => {
    console.log('Error:',"Some Error occured" );
    console.error(`use ${chalk.yellowBright("optimize --help")} instead`);
  })
  .on('progress', (progress) => {
    console.log('Progress:', progress.frames);
  })
  .on('end', () => {
    console.log(chalk.greenBright("Video optimized successfully"));
  })
  .run();

            }
        }
        else{
            console.log(chalk.redBright("Not a video file"));
        console.error(`use ${chalk.yellowBright("optimize --help")} instead`);
        }
    }
    catch (error) {
        console.log('Error:',"Some Error occured" );
        console.error(error);
    console.error(`use ${chalk.yellowBright("optimize --help")} instead`);
    }

}