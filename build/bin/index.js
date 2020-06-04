#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var package_json_1 = __importDefault(require("../package.json"));
var program = new commander_1.Command();
var version = package_json_1.default.version;
program
    .version(version, "-v, --vers", "output the current version")
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
