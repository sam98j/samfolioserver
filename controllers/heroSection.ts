import { GET, route } from 'awilix-express';
import { Request, Response } from 'express';
import { HeroSectionService } from '../services/heroSection';

// main Controller
@route('/hero_section')
class HeroSectionController {
  // constructor
  constructor(private readonly heroSectionService: HeroSectionService) {}
  // home route handler
  @GET()
  async heroSectionHandler(req: Request, res: Response) {
    try {
      // get heroSection data from the clinet
      const heroSectionData = await this.heroSectionService.getHeroSection();
      // send the heroSection data to the clinet
      res.send(heroSectionData);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default HeroSectionController;
