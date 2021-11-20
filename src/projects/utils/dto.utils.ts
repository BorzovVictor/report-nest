import { Project } from "../entities/project.entity";
import { JiraProject } from "../dto/JProject.model";

export const projectToDto = (project: Project): JiraProject => {
  return {
    ...project,
    avatarUrls: {...project.avatarUrls},
  }
}

export const projectToEntity = (projectDto: JiraProject): Project => {
  return new Project({
    ...projectDto,
    avatarUrls: { ...projectDto.avatarUrls },
  });
}
