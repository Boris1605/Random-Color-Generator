import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const colorName = argv[2];
const luminosity = argv[3];

const userColor = randomColor({
  luminosity: luminosity,
  hue: colorName,
});

const color = randomColor();
const changeColor = chalk.hex(userColor);

console.log(
  changeColor(`###############################
###############################
###############################
#####                     #####
#####      ${color}        #####
#####                     #####
###############################
###############################
###############################`),
);
