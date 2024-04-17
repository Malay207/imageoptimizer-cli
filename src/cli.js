import minimist from "minimist";
import chalk from 'chalk';
import { version } from "./version";
import { help } from "./help";
import { optimizeimg } from "./imageoptiize";
import { videooptimize } from "./videooptimize";
export async function cli(args){
    const arg=minimist(args.slice(2));
   let cmd=arg._[0] ||"help";
   if(arg.version||arg.v){
    cmd="version";
   }
   if(arg.help||arg.h){
    cmd="help";
   }
   switch (cmd) {
    case 'version':
        version();
        
        break;
        case 'help':
            help(arg);
            break;
            case 'image':
                optimizeimg(arg);
                break;
                case 'video':
                    videooptimize(arg);
                    break;
   
    default:
        console.error(`${chalk.yellowBright(cmd)} is not a valid command!`);
        console.error(`use ${chalk.yellowBright("optimize --help")} instead`);
        break;
   }
}