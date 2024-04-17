import chalk from 'chalk';
const fs=require('fs')
const path=require("path");
const Jimp = require('jimp') ;
export async function optimizeimg(arg){
    for(let i=1;i<arg._.length;i++)
    {
    
    try {
        if (fs.lstatSync(arg._[i]).isFile()) {
            let dir=path.dirname(arg._[i]);
            let file=path.basename(arg._[i]);
            let outpath=path.join(dir,"optimized",file);
            let jpeg=path.format({ ...path.parse(outpath), base: '', ext: '.jpg' })
            const extension = path.extname(arg._[i]).toLowerCase();
            if(extension===".jpg" || extension===".jpeg" || extension===".png"){
                const image = await Jimp.read
                (arg._[i]);
                // Used RESIZE_BEZIER as cb for finer images
                image.quality(60, function(err){
                   if (err)
                   {
                    console.log('Error:',"Some Error occured" );
                    console.error(`use ${chalk.yellowBright("optimize --help")} instead`);
                   }
                })
                .write(jpeg);
                console.log(chalk.greenBright("Image optimized successfully"));
            }
        }else{
            console.log(chalk.redBright("Not a image file"));
            console.error(`use ${chalk.yellowBright("optimize --help")} instead`);
        }
        
    } catch (error) {
        console.log('Error:',"Some Error occured" );
        console.error(error);
    console.error(`use ${chalk.yellowBright("optimize --help")} instead`);
        
    }
} 
}
