import {Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn} from 'typeorm';
import {User} from '../../users/entities/user.entity';
import {Project} from '../../projects/entities/project.entity';
import {Skill} from '../../skills/entities/skill.entity';
import {ReportDetail} from './report-detail.entity';

@Entity()
export class Report {
	@ObjectIdColumn()
	_id: string;
	@Column()
	project: Project;
	@Column()
	developer: User;
	@Column()
	techStack: Skill[];
	@Column()
	details: ReportDetail[];
	@Column('timestampz')
	@CreateDateColumn()
	createdAt: Date;
	@Column('timestampz')
	@UpdateDateColumn()
	updateAt: Date;
}
