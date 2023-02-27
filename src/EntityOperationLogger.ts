import { EventArgs, EventSubscriber } from "@mikro-orm/core";

export class EntityOperationLogger implements EventSubscriber {
  async afterUpdate<T>(args: EventArgs<T>): Promise<void> {
    console.log("EntityOperationLogger", args);
  }
}
