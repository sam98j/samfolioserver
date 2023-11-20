import { Schema, model } from 'mongoose';
import { AboutMeDbDoc } from '../interfaces/aboutMe.model';

// create project schema
const aboutMeSchema = new Schema<AboutMeDbDoc>({
  greeting: {ar: String, en: String},
  info: {en: String}
});

// create projects model
export const AboutMeModel = model<AboutMeDbDoc>('aboutMe', aboutMeSchema);