import { Command, Flags } from "@oclif/core";

export abstract class BaseCommand extends Command {
  static baseFlags = {
    migrations: Flags.string({
      description: "Where are your migrations located?",
    }),
  };
}
