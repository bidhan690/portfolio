import { connectToDatabase, insertDocument } from "@/helpers/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message, subject, number } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === "" ||
      subject.trim() === "" ||
      number.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
      subject,
      number,
    };

    try {
      const client = await connectToDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      insertDocument("messages", newMessage);
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Successfully stored message!" });
  } else {
    res.status(200).json({ message: "Permission not granted" });
  }
}
