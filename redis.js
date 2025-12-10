// redis.js
import { createClient } from "redis";

const redis = createClient({
  url: "redis://localhost:6379"     // Change if needed
});

redis.on("error", (err) => console.log("❌ Redis Error:", err));
redis.on("connect", () => console.log("✅ Redis Connected"));

await redis.connect();

export default redis;
