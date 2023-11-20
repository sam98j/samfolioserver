import { Model } from 'mongoose';
import { HeroSectionDbDoc } from '../interfaces/heroSection.model';


// home Services
export class HeroSectionService {
  constructor(private readonly heroSectionModel: Model<HeroSectionDbDoc>){}
  // get hero section
  async getHeroSection(){
    try {
      const heroSectionData = await this.heroSectionModel.findOne();
      return Promise.resolve(heroSectionData);
    } catch (error) {Promise.reject('database error');}
  }
}