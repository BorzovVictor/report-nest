import { ApiProperty } from '@nestjs/swagger';

export class SkillDto {
	@ApiProperty({
		description: 'skill name',
		default: ''
	})
	name: string;
	@ApiProperty({
		description: 'skill description',
		default: ''
	})
	description: string;
}
