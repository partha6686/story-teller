// http://localhost:3000/api/getblog?bt=the-lottery

import * as fs from "fs";

export default function handler(req, res) {
  try {
    fs.readFile(`blogdata/${req.query.bt}.json`, "utf8", (err, data) => {
      if (err) {
        res.status(400).json({ error: "Blog not found" });
      }
      res.status(200).json(JSON.parse(data));
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
