import { Command, Flags, Interfaces } from "@oclif/core";

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<
  (typeof BaseMigrateCommand)["globalFlags"] & T["flags"]
>;

export abstract class BaseMigrateCommand<
  T extends typeof Command
> extends Command {
  static globalFlags = {
    migrations: Flags.string({
      description: "Where are your migrations located?",
      default: "migrations",
    }),
  };

  protected flags!: Flags<T>;

  public async init(): Promise<void> {
    await super.init();

    const { flags } = await this.parse({
      flags: this.ctor.flags,
      globalFlags: BaseMigrateCommand.globalFlags,
      args: this.ctor.args,
      strict: this.ctor.strict,
    });

    this.flags = flags as Flags<T>;
  }
}
