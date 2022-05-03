import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { firstValueFrom } from 'rxjs';
import { JiraProject } from './dto/JProject.model';
import { ProjectRepository } from './project.repository';

@Injectable()
export class ProjectsService {
  private readonly root = '/rest/api/2/project';

  constructor(
	private client: HttpService,
	@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
	private readonly projectRepository: ProjectRepository
  ) {
  }

  async getAll(): Promise<ReadonlyArray<JiraProject>> {
	try {
		const result = await firstValueFrom(this.client.get<ReadonlyArray<JiraProject>>(this.root));
		return result?.data;
	} catch (e) {
		this.logger.error(e);
		throw e;
	}
  }

  async getByIdOrKey(idOrKey: string): Promise<JiraProject> {
	try {
		const result = await firstValueFrom(this.client.get<JiraProject>(`${this.root}/${idOrKey}`));
		return result?.data;
	} catch (e) {
		this.logger.error(e);
		throw e;
	}
  }

  async syncJiraProjects() {
	const projects = await this.getAll();
	for (const project of projects) {
		await this.projectRepository.addProject(project);
	}
  }
}
