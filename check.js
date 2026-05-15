import dbConnect from "https://creative-cone-backend-a18z.vercel.app/";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const data = await YourModel.find(); // example (MongoDB)
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}