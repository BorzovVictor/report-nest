import { Controller, Get, Param} from "@nestjs/common";
import { ProjectsService } from './projects.service';
import { JiraProject } from "./entities/JProject.model";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly service: ProjectsService) {}

  @Get()
  async getProjects() : Promise<ReadonlyArray<JiraProject>> {
    return this.service.getAll();
  }

  @Get(':idOrKey')
  async getById(@Param('idOrKey') idOrKey: string): Promise<JiraProject> {
    return this.service.getByIdOrKey(idOrKey);
  }
}
