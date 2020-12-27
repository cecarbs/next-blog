// export default function handler(req, res) {
//   if (req.query.secret === process.env.SANITY_PREVIEW_SECRET) {
//     return res.status(200).json({ message: "penis" });
//   }
// }

export default async function preview(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  return res.status(200).json({ message: "Enter" });
}
