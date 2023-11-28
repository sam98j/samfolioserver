import { GET, POST, route } from 'awilix-express';
import { Request, Response } from 'express';
import { ProjectService } from '../services/projects';
import { ProjectDbDoc } from '../interfaces/projects.model';
import { Multer } from 'multer';

// main Controller
@route('/projects')
class ProjectsController {
  // constructor
  constructor(
    private readonly projectService: ProjectService,
    private upload: Multer
  ) {}
  // home route handler
  @GET()
  async projectsHandler(req: Request, res: Response) {
    res.render('projects');
  }
  // retrive all projects
  @route('/all')
  @GET()
  async getAllProjects(req: Request, res: Response) {
    try {
      const projects = await this.projectService.getProjects();
      res.send(projects);
    } catch (error) {
      res.status(500).send('database error');
    }
  }
  // handle login
  @route('/add')
  @POST()
  addNewProjectHandler(req: Request, res: Response) {
    this.upload.single('file')(req, res, async () => {
      // get the new project data from the body
      const projectData = req.body as ProjectDbDoc;
      projectData.img = req.file?.path as string;
      try {
        await this.projectService.addProject(req, projectData);
        res.send({ msg: 'project added succesfuly' });
      } catch (error) {
        res.status(500).send({ msg: 'server error' });
      }
    });
  }
}

export default ProjectsController;
