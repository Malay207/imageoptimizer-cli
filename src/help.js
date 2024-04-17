
import chalk from 'chalk';

const menus = {
  main: `
${chalk.greenBright('optimize [command] <options>')}
${chalk.redBright('optimize help <image/video>..............more about this command')}
  ${chalk.blueBright('image')} ................ optimize the image
  ${chalk.blueBright('video')} ........... optimize the video
  ${chalk.blueBright('version')} ............ show package version
  ${chalk.blueBright('help')} ............... show help menu for a command
`,

  image: `
  ${chalk.greenBright('optimize [command] images/image1.jpg images/image2.jpg ................')} 
//         `,
  video: `
  ${chalk.greenBright('optimize [command] videos/video1.mp4 <144p/240p/1080p>')}
//         `,
}

export async function help(args) {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
}