import { GET, POST, route } from 'awilix-express';
import { Request, Response } from 'express';
import { HomeService } from '../services/homeService';

// main Controller
@route('/')
class HomeController {
  // constructor
  constructor(private readonly homeService: HomeService){}
  // home route handler
  @GET()
  heroSectionHandler(req: Request, res: Response){
    this.homeService.addProject();
    console.log(this.homeService.getData());
    res.render('index', {title: 'Home'});
  }
  // handle login
  @POST()
  loginHandler(req: Request, res: Response){
    console.log(this.homeService.getData());
    res.send({msg: 'done'});
  }
  // handle login
  @route('/login')
  @GET()
  loginGetHandler(req: Request, res: Response){
    console.log(this.homeService.getData());
    res.send({msg: 'done'});
  }
}

export default HomeController;