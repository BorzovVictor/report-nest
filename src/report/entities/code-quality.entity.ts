import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class CodeQuality {
	@ObjectIdColumn()
	_id: string;
	@Column()
	tsAmount?: number;
	@Column()
	tsAmountNote?: string;
	@Column()
	codeStyle?: number;
	@Column()
	codeStyleNote?: string;
	@Column()
	bugs?: number;
	@Column()
	bugsNote?: string;
}
