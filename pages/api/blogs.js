import * as fs from "fs";

export default async function handler(req, res) {
  try {
    let readFolder = await fs.promises.readdir("blogdata");
    const len = readFolder.length;
    readFolder = readFolder.slice(
      parseInt(req.query.c),
      parseInt(req.query.c) + 10
    );
    let data = [];
    for (let i = 0; i < readFolder.length; i++) {
      const file = await fs.promises.readFile(
        `blogdata/${readFolder[i]}`,
        "utf8"
      );
      data.push(JSON.parse(file));
    }
    res.status(200).json({ data, len });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
