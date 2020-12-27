// import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";
import client, { previewClient } from "./sanity";

const builder = imageUrlBuilder(client);
const getClient = (preview) => (preview ? previewClient : client);

export function urlFor(source) {
  return builder.image(source);
}

// /blog
export const blogCardFields = `
  _id,
  publishedAt,
  _createdAt,
  summary,
  mainImage,
  title,
  'slug': slug.current,
  'name': author->name,
  'categories': categories[0]->{title},
`;

export const categoryCardFields = `
  _id,
  title,
  'slug': slug.current,
  description,
  coverImage,
`;

export async function getPostBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const results = await currentClient
    .fetch(
      `*[_type == "post" && slug.current == $slug]{
    publishedAt,
    summary,
    'name': author->name,
    title,
    mainImage,
    imageUrl,
    body[]{..., "asset": asset->},
  }`,
      { slug }
    )
    .then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));

  return results;
}

// SEPERATE THIS FUNCTION INTO ANOTHER USED FOR PREVIEW OR TAILOR THE CALLS
export async function getPreviewPostBySlug(slug) {
  const results = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug]
    {publishedAt,
    'name': author->name,
    title,
    'slug': slug.current,
    mainImage,
    summary,
    imageUrl,
    body[]{..., "asset": asset->},
    'category': categories[0]->title
  }`,
    { slug }
  );

  return results[0];
}

// TO GET CATEGORY
// {'category': categories[0]->title}
// returns 'category' : 'personal development'

// out put of 'categories': categories[0]->{title}
// "category":{
//   "title":"Nutrition & Fitness"
//   }
