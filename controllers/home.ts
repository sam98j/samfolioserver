import { Request, Response } from 'express';




class HomeController {
  // home route handler
  heroSectionHandler(req: Request, res: Response){
    res.status(201).send('hero Section Done');
  }
}

export default HomeController;