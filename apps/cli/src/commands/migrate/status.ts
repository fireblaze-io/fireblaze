import fs from "fs-extra";
import { join } from "node:path";
import chalk from "chalk";
import { ux } from "@oclif/core/lib/cli-ux";
import { BaseMigrateCommand } from "../../baseMigrateCommand";

export default class Status extends BaseMigrateCommand<typeof Status> {
  static description = "Output status of migrations";

  static examples = [`<%= config.bin %> <%= command.id %>`];

  static flags = {};

  async run(): Promise<void> {
    const { flags } = await this.parse(Status);

    ux.action.start("Loading migrations");

    const path = join(process.cwd(), flags.migrations);
    const migrations = await fs.readdir(path);

    ux.action.stop(chalk`Found {blue ${migrations.length}} migrations`);

    ux.action.start("Checking migrations in firestore");
    ux.action.stop(chalk`Found {blue ${migrations.length}} migrations`);

    this.log();

    const table = migrations.map((name, index) => {
      const migration = require(join(path, name));

      return {
        id: migration.id,
        description: migration.description,
        status: index === 1 ? "pending" : "completed",
      };
    });

    ux.table(
      table,
      {
        id: {
          minWidth: 7,
          header: "ID",
        },
        description: {},
        status: {
          get: (row) => {
            if (row.status === "failed") {
              return chalk.red(row.status);
            }

            if (row.status === "pending") {
              return chalk.yellow(row.status);
            }

            return chalk.green(row.status);
          },
        },
      },
      {
        printLine: this.log.bind(this),
      }
    );
  }
}
