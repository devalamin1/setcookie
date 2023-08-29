export default function handler(req, res) {
  const { authorization } = req.headers;
  const newAuthorizationHeader = `Bearer ${authorization}`;

  res.setHeader("Authorization", newAuthorizationHeader);
  res.status(200).json({ message: "Header modified successfully" });
}
