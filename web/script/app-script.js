app.get("/api/get-code", async (req, res) => {
    try {
      const data = await fs.readFile(scriptFilePath, { encoding: "utf8" });
      res.status(200).send(data);
      console.log(res);
    } catch (err) {
      res.status(500).send(err.message);
    }    
  })



