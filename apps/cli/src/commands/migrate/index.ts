import { BaseCommand } from "../../baseCommand";

export default class Migrate extends BaseCommand {
  static description = "Run migrations";

  async run(): Promise<void> {}
}
