import { EntityRepository, MongoRepository } from 'typeorm';
import { Project } from './entities/project.entity';
import { JiraProject } from './dto/JProject.model';
import { projectToEntity } from './utils/dto.utils';

@EntityRepository(Project)
export class ProjectRepository extends MongoRepository<Project> {
	async addProject(projectDto: JiraProject): Promise<Project> {
		const existingProject = await this.findOne({id: projectDto.id});
		if (existingProject) {
			return this.updateProject(existingProject.id, projectDto);
		}

		const newProject = projectToEntity(projectDto);
		return this.save(newProject);
	}

	async updateProject(projectId: string, dataForUpdate: JiraProject): Promise<Project> {
		const projectToUpdate = projectToEntity(dataForUpdate);
		await this.update(projectId, projectToUpdate);
		return projectToUpdate;
	}
}
