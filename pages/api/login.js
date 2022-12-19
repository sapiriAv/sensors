import connect from "../../lib/mongodb";
import User from "../../model/schema";

connect();

export default async function handler(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.json({ status: "no user" });
  } else {
    res.redirect("/home");
  }
}
