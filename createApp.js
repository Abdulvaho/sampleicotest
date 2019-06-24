
'use strict';
const chalk = require('chalk');
const commander = require('commander');
const fs = require('fs-extra');
const path = require('path');
const validateProjectName = require('validate-npm-package-name');
const packageJson = require('../package.json');


const program = new commander.Command(packageJson.name)
    .version(packageJson.version)
    .arguments('--<project-directory>')
    .option('-pkg --package <package>', 'Package is required')
    .option('-scr --screen <screen>', 'Screen is required')
    .action(options => {
    })
    .parse(process.argv);

if (!(program.package && program.screen)) {
    console.log(`${chalk.red('Options package and screen options are mandatory for excuting ' + program.name())} `);
    console.log(
        `Please execute command ${chalk.cyan(`npm ${program.name()} --help`)} to see all options.`
    );
    process.exit(1);
}

createApp((program.package).toLowerCase(), (program.screen).toLowerCase());

function createApp(pkg, screen) {
    const AppPath = pkg + '//' + screen;
    const root = path.resolve(AppPath);
    const appName = path.basename(root);

    checkAppName(appName);
    fs.ensureDirSync(AppPath);
    console.log();
    console.log(`Creating a new React app in ${chalk.green(root)}.`);
    console.log();
    const originalDirectory = process.cwd();
    process.chdir(root);
  console.log('originalDirectory'+originalDirectory);
   console.log('root'+root);
   
}
