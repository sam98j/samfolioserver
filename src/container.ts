import * as awilix from 'awilix';
import { scopePerRequest } from 'awilix-express';
import { Application } from 'express';
import { ProjectsModel } from './models/projects';
import { ProjectService } from './services/projects';
import { HeroSectionService } from './services/heroSection';
import { AboutMeService } from './services/aboutMe';
import { HeroSectionModel } from './models/heroSection';
import { AboutMeModel } from './models/aboutMe';
import multer from 'multer';
import { multerConfig } from './configs/multer';

export const loadContainer = (app: Application) => {
  const Container = awilix.createContainer({ injectionMode: 'CLASSIC' });
  Container.register({
    projectService: awilix.asClass(ProjectService).scoped(),
  });
  Container.register({
    heroSectionService: awilix.asClass(HeroSectionService).scoped(),
  });
  Container.register({
    aboutMeService: awilix.asClass(AboutMeService).scoped(),
  });
  Container.register({ projectsModel: awilix.asValue(ProjectsModel) });
  Container.register({ heroSectionModel: awilix.asValue(HeroSectionModel) });
  Container.register({ aboutMeModel: awilix.asValue(AboutMeModel) });
  Container.register({ upload: awilix.asValue(multer(multerConfig)) });
  app.use(scopePerRequest(Container));
};
