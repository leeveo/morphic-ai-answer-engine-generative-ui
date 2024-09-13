import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imagesDir = path.join(process.cwd(), 'public/images');

  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan directory' });
    }
    res.status(200).json(files);
  });
}