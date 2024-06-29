import express, { Request, Response } from 'express';
import parseXml from './src/parse-xml';

const app = express();
const port: number = 3000;

app.get('/data', async (req: Request, res: Response) => {
  const xmlData = await parseXml();
  res.json(xmlData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
