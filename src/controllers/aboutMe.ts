import { GET, route } from 'awilix-express';
import { Request, Response } from 'express';
import { AboutMeService } from '../services/aboutMe';

// main Controller
@route('/about_me')
class AboutMeController {
  // constructor
  constructor(private readonly aboutMeService: AboutMeService) {}
  // home route handler
  @GET()
  async aboutMeHandler(req: Request, res: Response) {
    try {
      // get about me data from the database
      const aboutMeData = await this.aboutMeService.getAboutMeSection();
      // send the data to the clinet
      res.send(aboutMeData);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default AboutMeController;
