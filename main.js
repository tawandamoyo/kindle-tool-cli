#!/usr/bin/env node
const program = require('commander');
const package = require('./package.json');
const createBooks = require('./lib/createBooks');
const getRandomHighlights = require('./lib/randomize');


program
    .version("1.0.0")
    .description("kindle highlights parser")

program
    .command("create <txtFile>")
    .alias("c")
    .description("create a folder of books at 'output' ")
    .action( txtFile => {
        createBooks(txtFile)
    })

program
    .command("random <txtFile> [number]")
    .alias("r")
    .description("print random notes to terminal. The default is 3")
    .action((txtFile, number) => {
        getRandomHighlights(txtFile, number)
    });

program.parse(process.argv);
