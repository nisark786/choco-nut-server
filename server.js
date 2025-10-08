import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";
import cors from 'cors';  // install cors if not

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json")); // make sure db.json exists
const middlewares = jsonServer.defaults();

server.use(cors());       
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server running on port ${PORT}`);
});
