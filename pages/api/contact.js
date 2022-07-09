import * as fs from "fs";
// import { SnakeCase } from "react-lodash";

export default function handler(req, res) {
  if (req.method === "POST") {
    let key = Math.floor(Math.random() * 100000 + 1);
    // console.log(SnakeCase(req.body.name));
    console.log(req.body);
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
    // Process a POST request
  } else {
    res.status(400).json({ error: "Bad Request" });
  }
}
