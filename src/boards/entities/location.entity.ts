import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Location extends BaseEntity{
  @ObjectIdColumn()
  _id: string;
  @Column()
  projectId: number;
  @Column()
  displayName: string;
  @Column()
  projectName: string;
  @Column()
  projectKey: string;
  @Column()
  projectTypeKey: string;
  @Column()
  avatarURI: string;
  @Column()
  name: string;
}
