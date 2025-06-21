import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "./backend.did.js";

const canisterId = process.env.CANISTER_ID_BACKEND || "7z2qz-sqaaa-aaaab-aaeha-cai
";

const agent = new HttpAgent();
const backend = Actor.createActor(idlFactory, { agent, canisterId });

export default async function init() {
  return backend;
}
