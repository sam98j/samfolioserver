import { GET, route } from 'awilix-express';
import { Request, Response } from 'express';
import { HeroSectionService } from '../services/heroSection';

// main Controller
@route('/hero_section')
class HeroSectionController {
  // constructor
  constructor(private readonly heroSectionService: HeroSectionService){}
  // home route handler
  @GET()
  async heroSectionHandler(req: Request, res: Response){
    try {
      const heroSectionData = await this.heroSectionService.getHeroSection();  
      console.log(heroSectionData);
      res.send(heroSectionData);
    } catch (error) {res.status(500).send(error);}
  }
}

export default HeroSectionController;