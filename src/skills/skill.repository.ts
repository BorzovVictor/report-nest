import { EntityRepository, MongoRepository, ObjectID } from 'typeorm';
import {Skill} from './entities/skill.entity';
import {SkillDto} from './dto/skill.dto';

@EntityRepository(Skill)
export class SkillRepository extends MongoRepository<Skill> {

	async getAllSkills(): Promise<ReadonlyArray<Skill>> {
		return this.find();
	}

	async getSkillById(id: ObjectID): Promise<Skill> {
		return this.findOne(id);
	}

	async addSkill(skillDto: SkillDto): Promise<Skill> {
		const newSkill = new Skill(skillDto.name, skillDto.description);
		const existingSkill = await this.findOne({upperName: skillDto.name.toUpperCase()});
		if (existingSkill) {
			return this.updateSkill(existingSkill._id, skillDto);
		}

		return this.save(newSkill);
	}

	async updateSkill(id: ObjectID, skillDto: SkillDto): Promise<Skill> {
		const skillForUpdate = await this.findOne(id);
		if(skillForUpdate) {
			const result = await this.update(skillForUpdate, skillDto);
			if (result.affected) {
				return this.findOne(id);
			}
		}
		throw new Error('skill not found');
	}

	async removeSkill(id: ObjectID): Promise<Boolean> {
		const result = await this.delete(id);
		return !!result.affected;
	}

}
