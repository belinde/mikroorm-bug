import { Entity, JsonType, PrimaryKey, Property } from "@mikro-orm/core";
import { ulid } from "ulid";

type Setup = {
  limits?: boolean;
  fallbackFees?: boolean;
};

@Entity()
export class Contract {
  @PrimaryKey({ columnType: "char(26)" })
  id = ulid();

  @Property()
  title: string;

  @Property({ type: JsonType, nullable: true })
  setup: Setup | null = null;
}
