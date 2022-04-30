import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Skill {
  @ObjectIdColumn()
  _id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  upperName: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    if(name) {
      this.upperName = name.toUpperCase();
    }
  }
}
