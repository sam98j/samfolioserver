import { Schema, model } from 'mongoose';
import { ProjectDbDoc } from '../interfaces/projects.model';

// create project schema
const projectSchema = new Schema<ProjectDbDoc>({
  disc: String,
  name: String,
  id: String,
  img: String,
});

// create projects model
export const ProjectsModel = model<ProjectDbDoc>('projects', projectSchema);