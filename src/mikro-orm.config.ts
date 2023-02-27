import { PopulateHint } from "@mikro-orm/core";
import { Options } from "@mikro-orm/core/utils";
import { MySqlDriver } from "@mikro-orm/mysql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { EntityOperationLogger } from "./EntityOperationLogger";

const mikroConfig: Options<MySqlDriver> = {
  metadataProvider: TsMorphMetadataProvider,
  entities: ["./entity/[A-Z]*.js"],
  entitiesTs: ["./src/entity/[A-Z]*.ts"],
  subscribers: [new EntityOperationLogger()],
  forceUtcTimezone: true,
  populateWhere: PopulateHint.INFER,
  driverOptions: {
    connection: {
      dateStrings: true,
    },
  },
  debug: true,
  logger: (query) => console.log("QUERY", query),
};

export default mikroConfig;
