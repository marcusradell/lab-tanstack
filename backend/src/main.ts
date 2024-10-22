import express from "express";

export function main(port: number) {
  const app = express();

  app.get("/status", (req, res) => {
    res.json({ status: "READY" });
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}.`);
  });

  return "Hi!";
}
