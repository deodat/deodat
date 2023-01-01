#!/usr/bin/env node

const chalk = require('chalk')
const alert = require('cli-alerts');
const init = require('./utils/init')

const italic = chalk.italic
const dim = chalk.dim
const codepenColor = chalk.hex('#0ebeff').bold.inverse;
const githubColor = chalk.hex('#6cc644').bold.inverse;


(async () => {
  init();

  console.log(`${italic(
`Creative frontend dev • Freelancer • Ex Nouvelle Vague
♥️  #GSAP #ThreeJS #WebGL #Shaders #Nuxt #Storyblok ♥️
Golf addict • Co-creator coeurdegreen.fr`
    )}

    ${githubColor(' GitHub ')}  ${dim(`https://github.com/deodat`)}
    ${codepenColor(' Codepen ')} ${dim(`https://codepen.io/deodat`)}
  `);

  alert({ type: 'info', msg: `Check out my NodeCLI.com course.` });
})();