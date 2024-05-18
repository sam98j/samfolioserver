import e from 'express';
import multer, { Options } from 'multer';

export const multerConfig = {
  storage: multer.diskStorage({
    destination: './public/projects_imgs',
    filename: (
      req: e.Request,
      file: Express.Multer.File,
      cb: (err: Error | null, filename: string) => void
    ) => {
      cb(null, file.originalname);
    },
  }),
  limits: 2 * 1024,
} as Options;
