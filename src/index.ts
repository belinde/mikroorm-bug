import { MikroORM } from "@mikro-orm/core";
import { Contract } from "./entity/Contract";

MikroORM.init()
  .then(async (orm) => {
    const em = orm.em.fork();
    await em.findOneOrFail(Contract, "01GT9WBT1Z05T1NARYGGTNMVFN");
    await em.flush();
  })
  .finally(() => process.exit());
