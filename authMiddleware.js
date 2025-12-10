import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        // Token from headers
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No Token Provided" });
        }

        // Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Store user details in request
        req.user = decoded;

        next(); // Continue to protected route
    } catch (error) {
        return res.status(401).json({ message: "Invalid or Expired Token" });
    }
};
