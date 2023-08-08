# 🔥 Fireblaze 

Create and manage your firebase migrations

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [🔥 Fireblaze](#-fireblaze)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g fireblaze
$ fireblaze COMMAND
running command...
$ fireblaze (--version)
fireblaze/0.0.0 darwin-x64 node-v18.13.0
$ fireblaze --help [COMMAND]
USAGE
  $ fireblaze COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fireblaze help [COMMAND]`](#fireblaze-help-command)
* [`fireblaze migrate`](#fireblaze-migrate)
* [`fireblaze migrate deploy`](#fireblaze-migrate-deploy)
* [`fireblaze migrate generate`](#fireblaze-migrate-generate)
* [`fireblaze migrate list`](#fireblaze-migrate-list)
* [`fireblaze migrate status`](#fireblaze-migrate-status)
* [`fireblaze plugins`](#fireblaze-plugins)
* [`fireblaze plugins:install PLUGIN...`](#fireblaze-pluginsinstall-plugin)
* [`fireblaze plugins:inspect PLUGIN...`](#fireblaze-pluginsinspect-plugin)
* [`fireblaze plugins:install PLUGIN...`](#fireblaze-pluginsinstall-plugin-1)
* [`fireblaze plugins:link PLUGIN`](#fireblaze-pluginslink-plugin)
* [`fireblaze plugins:uninstall PLUGIN...`](#fireblaze-pluginsuninstall-plugin)
* [`fireblaze plugins:uninstall PLUGIN...`](#fireblaze-pluginsuninstall-plugin-1)
* [`fireblaze plugins:uninstall PLUGIN...`](#fireblaze-pluginsuninstall-plugin-2)
* [`fireblaze plugins update`](#fireblaze-plugins-update)

## `fireblaze help [COMMAND]`

display help for fireblaze

```
USAGE
  $ fireblaze help [COMMAND] [--json] [--all]

ARGUMENTS
  COMMAND  command to show help for

FLAGS
  --all   see all commands in CLI
  --json  Format output as json.

DESCRIPTION
  display help for fireblaze
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.0.0/src/commands/help.ts)_

## `fireblaze migrate`

Run migrations

```
USAGE
  $ fireblaze migrate

DESCRIPTION
  Run migrations
```

_See code: [dist/commands/migrate/index.ts](https://github.com/fireblaze-io/fireblaze/blob/v0.0.0/dist/commands/migrate/index.ts)_

## `fireblaze migrate deploy`

Deploy migrations

```
USAGE
  $ fireblaze migrate deploy [-m <value>]

FLAGS
  -m, --migrations=<value>  [default: migrations] Where are your migrations located?

DESCRIPTION
  Deploy migrations

EXAMPLES
  $ fireblaze migrate deploy
```

_See code: [dist/commands/migrate/deploy.ts](https://github.com/fireblaze-io/fireblaze/blob/v0.0.0/dist/commands/migrate/deploy.ts)_

## `fireblaze migrate generate`

Generate a new migration

```
USAGE
  $ fireblaze migrate generate [-m <value>]

FLAGS
  -m, --migrations=<value>  [default: migrations] Where are your migrations located?

DESCRIPTION
  Generate a new migration

EXAMPLES
  $ fireblaze migrate generate
```

_See code: [dist/commands/migrate/generate.ts](https://github.com/fireblaze-io/fireblaze/blob/v0.0.0/dist/commands/migrate/generate.ts)_

## `fireblaze migrate list`

List all migrations

```
USAGE
  $ fireblaze migrate list

DESCRIPTION
  List all migrations

EXAMPLES
  $ fireblaze migrate list
```

_See code: [dist/commands/migrate/list.ts](https://github.com/fireblaze-io/fireblaze/blob/v0.0.0/dist/commands/migrate/list.ts)_

## `fireblaze migrate status`

Output status of migrations

```
USAGE
  $ fireblaze migrate status [--migrations <value>]

FLAGS
  --migrations=<value>  [default: migrations] Where are your migrations located?

DESCRIPTION
  Output status of migrations

EXAMPLES
  $ fireblaze migrate status
```

_See code: [dist/commands/migrate/status.ts](https://github.com/fireblaze-io/fireblaze/blob/v0.0.0/dist/commands/migrate/status.ts)_

## `fireblaze plugins`

List installed plugins.

```
USAGE
  $ fireblaze plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fireblaze plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/index.ts)_

## `fireblaze plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fireblaze plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fireblaze plugins add

EXAMPLES
  $ fireblaze plugins:install myplugin 

  $ fireblaze plugins:install https://github.com/someuser/someplugin

  $ fireblaze plugins:install someuser/someplugin
```

## `fireblaze plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fireblaze plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fireblaze plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/inspect.ts)_

## `fireblaze plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fireblaze plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fireblaze plugins add

EXAMPLES
  $ fireblaze plugins:install myplugin 

  $ fireblaze plugins:install https://github.com/someuser/someplugin

  $ fireblaze plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/install.ts)_

## `fireblaze plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ fireblaze plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ fireblaze plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/link.ts)_

## `fireblaze plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fireblaze plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fireblaze plugins unlink
  $ fireblaze plugins remove
```

## `fireblaze plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fireblaze plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fireblaze plugins unlink
  $ fireblaze plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/uninstall.ts)_

## `fireblaze plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fireblaze plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fireblaze plugins unlink
  $ fireblaze plugins remove
```

## `fireblaze plugins update`

Update installed plugins.

```
USAGE
  $ fireblaze plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
