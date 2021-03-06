#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var program = new commander_1.Command();
var version = "0.0.1";
program.version(version);
program
    .option("-d, --debug", "output extra debugging")
    .option("-s, --small", "small pizza size")
    .option("-p, --pizza-type <type>", "flavour of pizza");
program.parse(process.argv);
if (program.debug)
    console.log(program.opts());
if (program.small)
    console.log("- small pizza size");
if (program.pizzaType)
    console.log("- " + program.pizzaType);
