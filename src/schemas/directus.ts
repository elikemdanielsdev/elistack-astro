import { createDirectus, rest } from "@directus/sdk";
import type { Global } from "./_global";
import type { Home } from "./_home";

// Schema for the Directus API
type Schema = {
  global: Global;
  home: Home;
};

const directusApiUrl = import.meta.env.DIRECTUS_API_ENDPOINT;

if (!directusApiUrl) {
  throw new Error("DIRECTUS_API_ENDPOINT is not set");
}

const directus = createDirectus<Schema>(directusApiUrl).with(rest());

export { directus, directusApiUrl };
