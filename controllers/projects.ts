import { GET, POST, route } from 'awilix-express';
import { Request, Response } from 'express';
import { ProjectService } from '../services/projects';
import { ProjectDbDoc } from '../interfaces/projects.model';

// main Controller
@route('/projects')
class ProjectsController {
  // constructor
  constructor(private readonly projectService: ProjectService){}
  // home route handler
  @GET()
  async projectsHandler(req: Request, res: Response){
    try {
      const projects = await this.projectService.getProjects();
      console.log(projects);
      res.send(projects);
    } catch (error) {res.status(500).send(error);}
  }
  // handle login
  @route('/add')
  @POST()
  async addNewProjectHandler(req: Request, res: Response){
    // get the new project data from the body 
    const projectData = req.body as ProjectDbDoc;
    console.log(projectData);
    try {
      await this.projectService.addProject(projectData);
      res.send({msg: 'project added succesfuly'});
    } catch (error) {res.status(500).send({msg: 'server error'});}
  }
}

export default ProjectsController;