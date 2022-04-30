import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Skill {
  @ObjectIdColumn()
  _id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  upperName: string;
  @Column('timestampz')
  @CreateDateColumn()
  created_at: Date;
  @Column('timestampz')
  @UpdateDateColumn()
  updateAt: Date;

  constructor(name: string, description: string) {
	this.name = name;
	this.description = description;
	if(name) {
		this.upperName = name.toUpperCase();
	}
  }
}
