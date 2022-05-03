import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillRepository } from './skill.repository';

@Module({
	imports: [TypeOrmModule.forFeature([SkillRepository])],
	providers: [SkillsService],
	controllers: [SkillsController],
	exports:[SkillsService]
})
export class SkillsModule {
}
