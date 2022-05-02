import { Project } from '../../projects/entities/project.entity';
import { User } from '../../users/entities/user.entity';
import { Skill } from '../../skills/entities/skill.entity';
import { CodeQuality } from '../entities/code-quality.entity';

export class ReportDto {
	project: Project;
	developer: User;
	techStack: Skill[];
	specificationMeet?: number;
	specificationMeetNote?: string;
	codeQuality: CodeQuality;
	learningSpeed?: number;
	learningSpeedNote?: string;
	speed?: number;
	speedNote?: string;
	needsSupport?: number;
	needsSupportNote?: string;
	providesSupport?: number;
	providesSupportNote?: string;
	customerTeamCommunication?: number;
	customerTeamCommunicationNote?: string;
}
