import { Model } from 'mongoose';
import { AboutMeDbDoc } from '../interfaces/aboutMe.model';


// home Services
export class AboutMeService {
  constructor(private readonly aboutMeModel: Model<AboutMeDbDoc>){}
  // get hero section
  async getAboutMeSection(){
    try {
      const aboutMeData = await this.aboutMeModel.findOne({}, {_id: 0});
      console.log(aboutMeData);
      return Promise.resolve(aboutMeData);
    } catch (error) {Promise.reject('database error');}
  }
}