import { Model } from 'mongoose';
import { ProjectDbDoc } from '../interfaces/projects.model';
import { Request } from 'express';

// home Services
export class ProjectService {
  constructor(private readonly projectsModel: Model<ProjectDbDoc>) {}
  // add new project to db
  async addProject(req: Request, project: ProjectDbDoc) {
    const PORT = process.env.PORT;
    const hostname = `${req.protocol}://${req.hostname}:${PORT}`;
    project.img = hostname.concat(project.img.split('public')[1]);
    // new created project
    try {
      const newProject = new this.projectsModel(project);
      await newProject.save();
      return Promise.resolve('project added succesfuly');
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // add new project to db
  async getProjects() {
    // new created project
    try {
      const projects = await this.projectsModel.find();
      return Promise.resolve(projects);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
