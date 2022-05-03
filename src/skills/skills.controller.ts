import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillDto } from './dto/skill.dto';
import { ApiTags } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';

@ApiTags('Report skills')
@Controller('skills')
export class SkillsController {
	constructor(private service: SkillsService) {	}

	@Get()
	async getSkills(): Promise<ReadonlyArray<SkillDto>> {
		return this.service.getAll();
	}

	@Get(':id')
	async getSkillById(@Param('id') id: ObjectID): Promise<SkillDto> {
		return this.service.getSkillById(id);
	}

	@Post()
	async create(@Body() createSkillDto: SkillDto) {
		return this.service.addSkill(createSkillDto);
	}

	@Put(':id')
	async update(@Param('id') id: ObjectID, @Body() updateSkillDto: SkillDto) {
		return this.service.updateSkill(id, updateSkillDto);
	}

	@Delete(':id')
	remove(@Param('id') id: ObjectID) {
		return this.service.removeSkill(id);
	}
}
