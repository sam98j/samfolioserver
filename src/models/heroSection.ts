import { Schema, model } from 'mongoose';
import { HeroSectionDbDoc } from '../interfaces/heroSection.model';

// create project schema
const heroSectionSchema = new Schema<HeroSectionDbDoc>({
  greeting: {ar: String, en: String},
  titiles: [{en: String, ar: String}],
  overview: {ar: String, en: String}
});

// create projects model
export const HeroSectionModel = model<HeroSectionDbDoc>('heroSection', heroSectionSchema);