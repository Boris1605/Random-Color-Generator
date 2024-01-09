import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

let finalColor;
const colorName = argv[2];
const brightnessLum = argv[3];
if (colorName) {
  finalColor = randomColor({
    luminosity: brightnessLum,
    hue: colorName,
  });
} else {
  finalColor = randomColor();
}

const changeColor = chalk.hex(finalColor);

console.log(
  changeColor(`###############################
###############################
###############################
#####                     #####
#####      ${finalColor}        #####
#####                     #####
###############################
###############################
###############################`),
);
