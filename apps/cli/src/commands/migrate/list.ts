import { Command } from "@oclif/core";
import fs from "fs-extra";
import { join } from "node:path";
import chalk from "chalk";

export default class List extends Command {
  static description = "List all migrations";

  static examples = [`<%= config.bin %> <%= command.id %>`];

  static flags = {};

  async run(): Promise<void> {
    const path = join(process.cwd(), "migrations");
    const migrations = await fs.readdir(path);

    this.log("Found the following migrations:");

    for (const name of migrations) {
      const file = join(path, name);
      const migration = require(file);

      const id = migration.id?.() ?? name;

      this.log(chalk.grey(migrations.indexOf(name) + 1) + ".", chalk.green(id));
    }
  }
}
