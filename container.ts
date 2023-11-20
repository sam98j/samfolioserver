import * as awilix from 'awilix';
import { scopePerRequest } from 'awilix-express';
import { Application } from 'express';
import { HomeService } from './services/homeService';
import { ProjectsModel } from './models/projects';
import { ProjectService } from './services/projects';
import { HeroSectionService } from './services/heroSection';
import { AboutMeService } from './services/aboutMe';
import { HeroSectionModel } from './models/heroSection';
import { AboutMeModel } from './models/aboutMe';



export const loadContainer = (app: Application) => {
  const Container = awilix.createContainer({injectionMode: 'CLASSIC'});
  // regester home service
  Container.register({homeService: awilix.asClass(HomeService).scoped()});
  Container.register({projectService: awilix.asClass(ProjectService).scoped()});
  Container.register({heroSectionService: awilix.asClass(HeroSectionService).scoped()});
  Container.register({aboutMeService: awilix.asClass(AboutMeService).scoped()});
  Container.register({projectsModel: awilix.asValue(ProjectsModel)});
  Container.register({heroSectionModel: awilix.asValue(HeroSectionModel)});
  Container.register({aboutMeModel: awilix.asValue(AboutMeModel)});
  app.use(scopePerRequest(Container));
};