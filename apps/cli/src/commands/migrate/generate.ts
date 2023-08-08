import { Command, Flags, ux } from "@oclif/core";
import fs from "fs-extra";
import { join } from "node:path";
import { BaseMigrateCommand } from "../../baseMigrateCommand";

export default class Generate extends BaseMigrateCommand<typeof Generate> {
  static examples = [`<%= config.bin %> <%= command.id %>`];

  async run(): Promise<void> {
    const { flags } = await this.parse(Generate);

    const path = join(process.cwd(), flags.migrations);

    if (!(await fs.pathExists(path))) {
      this.error(`Migrations path ${path} does not exist`);
    }

    const description = await ux.prompt(
      "What is the description of the migration?"
    );

    const id = description.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const file = join(path, `${Date.now()}-${id}.ts`);

    const content = generate(id, description).trim();

    await fs.writeFile(file, content);
  }
}

function generate(id: string, description: string) {
  return `
import * as firebase from "firebase-admin";

export const id = "${id}"
export const description = "${description}"

export function up(admin: firebase.firestore.Firestore): void {
}

export function down(admin: firebase.firestore.Firestore): void {
}
`;
}
