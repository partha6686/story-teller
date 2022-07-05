// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  try {
    const readFolder = await fs.promises.readdir("blogdata");
    let data = [];
    for (let i = 0; i < readFolder.length; i++) {
      const file = await fs.promises.readFile(
        `blogdata/${readFolder[i]}`,
        "utf8"
      );
      data.push(JSON.parse(file));
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
