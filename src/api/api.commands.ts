import { Option } from "commander";
import {
  createApiWithDefaults,
  ApiConfigurationDefault,
} from "./api-configuration";
import { Api } from ".";
import { DataSourcesCmd, GlobalOptions } from "cli/command";

type ApiOptions = Pick<
  GlobalOptions,
  | "attesterLibrary"
  | "availableDataStore"
  | "availableGroupStore"
  | "groupStore"
  | "groupGeneratorLibrary"
> & {
  port: number;
  staticUrl?: string;
};

export const getApi = ({
  attesterLibrary,
  availableDataStore,
  availableGroupStore,
  groupStore,
  groupGeneratorLibrary,
  staticUrl,
}: ApiOptions): Api =>
  createApiWithDefaults(ApiConfigurationDefault.Local, {
    attesterLibrary: attesterLibrary,
    availableDataStore: availableDataStore,
    availableGroupStore: availableGroupStore,
    groupStore: groupStore,
    groupGeneratorLibrary: groupGeneratorLibrary,
    ...(staticUrl ? { staticPrefix: staticUrl } : {}),
  });

/* istanbul ignore next */
export const startApi = async (options: ApiOptions): Promise<void> => {
  await getApi(options).listen({ port: options.port });
};

export const apiCmd = new DataSourcesCmd("api");
apiCmd.addOption(
  new Option("--port <number>", "Listen to specific port")
    .default(8000)
    .argParser(parseInt)
);
apiCmd.addOption(
  new Option(
    "--static-url <string>",
    "Static URL. If set, static assets won't be served by this API."
  )
);
apiCmd.action(startApi);