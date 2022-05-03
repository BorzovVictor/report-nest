import { Inject, Injectable } from '@nestjs/common';
import { SkillRepository } from './skill.repository';
import { Skill } from './entities/skill.entity';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { SkillDto } from './dto/skill.dto';
import { ObjectID } from 'typeorm';

@Injectable()
export class SkillsService {
	constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
							private readonly repo: SkillRepository) {
	}

	async getAll(): Promise<ReadonlyArray<Skill>> {
		try {
			return this.repo.getAllSkills();
		} catch (e) {
			this.logger.error(e);
		}
	}

	async getSkillById(id: ObjectID): Promise<Skill> {
		try {
			return this.repo.getSkillById(id);
		} catch (e) {
			this.logger.error(e);
		}
	}

	async addSkill(skillDto: SkillDto): Promise<Skill> {
		try {
			return this.repo.addSkill(skillDto);
		} catch (e) {
			this.logger.error(e);
		}
	}

	async updateSkill(id: ObjectID, skillDto: SkillDto): Promise<Skill> {
		return this.repo.updateSkill(id, skillDto);
	}

	async removeSkill(id: ObjectID): Promise<Boolean> {
		try {
			return this.repo.removeSkill(id);
		} catch (e) {
			this.logger.error(e);
		}
	}

}
