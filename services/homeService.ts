import { Model } from 'mongoose';
import { ProjectDbDoc } from '../interfaces/projects.model';


// home Services
export class HomeService {
  constructor(private readonly projectsModel: Model<ProjectDbDoc>){}
  getData(){return [1, 2, 4];}
  addProject(){
    const project = new this.projectsModel({id: 'testId', name: 'Test Name', img: '', disc: 'lorem text'});
    project.save();
  }
}