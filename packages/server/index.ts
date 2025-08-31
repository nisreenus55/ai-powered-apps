import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => { 
    res.send('Hello!');
})

app.get("/api/hello", (req: Request, res: Response) => {
  res.send({ message: "Hello from json" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});