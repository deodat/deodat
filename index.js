#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome');
const chalk = require('chalk')
const checkNode = require('cli-check-node')

const log = console.log
const italic = chalk.italic
const dim = chalk.dim
const codepenColor = chalk.hex('#0ebeff').bold.inverse
const githubColor = chalk.hex('#6cc644').bold.inverse

// Alerts
const sym = require('log-symbols')

const success = chalk.green
const info = chalk.blue
const warning = chalk.keyword('orange')
const error = chalk.red.bold

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

checkNode('14')

log(`${italic(
  `Creative frontend dev • Freelancer • Ex Nouvelle Vague
♥️  #GSAP #ThreeJS #WebGL #Shaders #Nuxt #Storyblok ♥️
Golf addict • Co-creator coeurdegreen.fr`
)}

${githubColor(' GitHub ')}  ${dim(`https://github.com/deodat`)}
${codepenColor(' Codepen ')} ${dim(`https://codepen.io/deodat`)}
`)

log(`
${sym.info} ${info(` INFO `)} This is a CLI app!
`)