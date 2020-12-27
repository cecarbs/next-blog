import sanityClient from "@sanity/client";

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  useCdn: process.env.NODE_ENV === "production",
};

export default sanityClient(config);

export const previewClient = sanityClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
