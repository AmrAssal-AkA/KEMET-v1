import axios from "axios";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const res = await axios.post("http://localhost:8000/api/blog/", req.body);
    const data = await res.data;
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching blogs." });
  }
}

export default handler;
