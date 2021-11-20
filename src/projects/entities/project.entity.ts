import { Column, Entity, ObjectIdColumn } from "typeorm";
import { AvatarUrls } from "../../common/entities/avatarUrls.entity";

@Entity()
export class Project {
  @ObjectIdColumn()
  id: string;
  @Column()
  expand: string;
  @Column()
  self: string;
  @Column()
  key: string;
  @Column()
  name: string;
  @Column()
  avatarUrls: AvatarUrls;
  @Column()
  projectTypeKey: string;
  @Column()
  simplified: boolean;
  @Column()
  style: string;
  @Column()
  isPrivate: boolean;
  @Column()
  entityId?: string;
  @Column()
  uuid?: string;

  public constructor(init?: Partial<Project>) {
    Object.assign(this, init);
  }
}
