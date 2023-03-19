import { connectToDatabase, insertDocument, getData } from "@/helpers/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      projectName,
      techUsed,
      overviewText,
      imageLink,
      demoLink,
      codeLink,
      techArray,
    } = req.body;

    const newMessage = {
      projectName,
      techUsed,
      overviewText,
      imageLink,
      demoLink,
      codeLink,
      techArray,
    };

    try {
      await connectToDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      await insertDocument("projects", newMessage);
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Successfully stored message!" });
  } else if (req.method === "GET") {
    const data = await getData("projects");

    res.status(200).json(data);
  } else {
    res.status(200).json({ message: "Permission not granted" });
  }
}
