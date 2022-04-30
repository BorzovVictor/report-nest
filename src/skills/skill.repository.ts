import { EntityRepository, MongoRepository } from "typeorm";
import { Skill } from "./entities/skill.entity";
import { SkillDto } from "./dto/skill.dto";

@EntityRepository(Skill)
export class SkillRepository extends MongoRepository<Skill>{
  async addSkill(skillDto: SkillDto): Promise<Skill> {
    const newSkill = new Skill(skillDto.name, skillDto.description);
    const existingSkill = await this.findOne({ upperName: skillDto.name.toUpperCase() });
    if(existingSkill) {
      return await this.updateSkill(existingSkill._id, skillDto);
    }

    return  await this.save(newSkill);
  }

  async updateSkill(id: string, skillDto: SkillDto): Promise<Skill> {
    await this.update(id, skillDto);
    return await this.findOne(id);
  }

  async removeSkill(id: string) :Promise<Boolean> {
    const result = await this.deleteOne({_id: id});
    return !!result.deletedCount;
  }

}
