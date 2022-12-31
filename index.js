#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome');
const chalk = require('chalk')
const log = console.log
const italic = chalk.italic
const dim = chalk.dim
const codepenColor = chalk.hex('#0ebeff').bold.inverse
const githubColor = chalk.hex('#6cc644').bold.inverse

welcome({
  title: 'David Gourdet aka Deodat - Garnement',
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true
})

log(`${italic(
  `Creative frontend dev • Freelancer • Ex Nouvelle Vague
♥️  #GSAP #ThreeJS #WebGL #Shaders #Nuxt #Storyblok ♥️
Golf addict • Co-creator coeurdegreen.fr`
)}

${githubColor(' GitHub ')}  ${dim(`https://github.com/deodat`)}
${codepenColor(' Codepen ')} ${dim(`https://codepen.io/deodat`)}

`)