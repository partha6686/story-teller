import * as fs from "fs";
// import { SnakeCase } from "react-lodash";

export default function handler(req, res) {
  if (req.method === "POST") {
    let key = Math.floor(Math.random() * 100000 + 1);
    if (!req.body.name) {
      res.status(400).json({ error: "Name Can't be empty" });
    } else {
      fs.writeFile(
        `contactdata/${req.body.name.split(" ").join("-")}-${key}.json`,
        JSON.stringify(req.body),
        (err) => {
          if (err) {
            res.status(500).json({ error: "Internal Server error" });
          }
          res
            .status(200)
            .json({ info: "Contact information saved successfully" });
        }
      );
    }
  } else {
    res.status(400).json({ error: "Bad Request" });
  }
}
