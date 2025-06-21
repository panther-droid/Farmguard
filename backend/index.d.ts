declare module "src/declarations/backend" {
  import type { ActorSubclass } from "@dfinity/agent";
  import type { _SERVICE } from "./backend.did";

  const backend: ActorSubclass<_SERVICE>;
  export default backend;
}
