import { Command, Flags, ux } from "@oclif/core";
import fs from "fs-extra";
import { join } from "node:path";
import { BaseMigrateCommand } from "../../baseMigrateCommand";
import chalk from "chalk";

export default class Deploy extends BaseMigrateCommand<typeof Deploy> {
  static description = "Deploy migrations";

  static examples = [`<%= config.bin %> <%= command.id %>`];

  async run(): Promise<void> {
    const { flags } = await this.parse(Deploy);

    const path = join(process.cwd(), flags.migrations);

    if (!(await fs.pathExists(path))) {
      this.error(`Migrations path ${path} does not exist`);
    }

    const migrations = await fs.readdir(path);

    this.log();
    this.log(chalk`Found {blue ${migrations.length}} migrations`);

    for (const name of migrations) {
      const index = migrations.indexOf(name) + 1;
      const file = join(path, name);
      const migration = require(file);

      const id = migration.id;
      const description = migration.description;

      const task = chalk`{grey ${index}}. {blue ${description}}`;

      ux.action.start(task, "initializing");

      await wait(2000);

      ux.action.status = "running migration";

      await migration.up();

      await wait(2000);

      ux.action.stop("done");
    }
  }
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
