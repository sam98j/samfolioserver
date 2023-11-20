import { Model } from 'mongoose';
import { ProjectDbDoc } from '../interfaces/projects.model';


// home Services
export class ProjectService {
  constructor(private readonly projectsModel: Model<ProjectDbDoc>){}
  // add new project to db
  async addProject(project: ProjectDbDoc){
    // new created project
    try {
      const newProject = new this.projectsModel(project);
      await newProject.save();
      return Promise.resolve('project added succesfuly');
    } catch (error) {return Promise.reject(error);}
  }
  // add new project to db
  async getProjects(){
    // new created project
    try {
      const projects = await this.projectsModel.findOne();
      return Promise.resolve(projects);
    } catch (error) {return Promise.reject(error);}
  }
}