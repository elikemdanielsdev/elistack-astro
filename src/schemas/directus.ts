import { createDirectus, rest } from "@directus/sdk";
import type { Global } from "./_global";
import type { Home } from "./_home";
import type { Article } from "./_articles";

// Schema for the Directus API
type Schema = {
  global: Global;
  home: Home;
  articles: Article[];
};

const directusApiUrl = import.meta.env.DIRECTUS_API_ENDPOINT;

if (!directusApiUrl) {
  throw new Error("DIRECTUS_API_ENDPOINT is not set");
}

const directus = createDirectus<Schema>(directusApiUrl).with(rest());

export { directus, directusApiUrl };
