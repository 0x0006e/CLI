#!/usr/bin/env node
import { Command } from "commander";
import PackageJson from "../package.json";

const program = new Command();
const { version } = PackageJson;

program
  .version(version, "-v, --vers", "output the current version")
  .option("-d, --debug", "output extra debugging")
  .option("-s, --small", "small pizza size")
  .option("-p, --pizza-type <type>", "flavour of pizza");

program.parse(process.argv);

if (program.debug) console.log(program.opts());
if (program.small) console.log("- small pizza size");
if (program.pizzaType) console.log(`- ${program.pizzaType}`);
