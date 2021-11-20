import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from "typeorm";
import { AvatarUrls } from "../../common/entities/avatarUrls.entity";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  _id: string;
  @Column()
  self: string;
  @PrimaryColumn()
  accountId: string;
  @Column()
  accountType: string;
  @Column()
  emailAddress?: string;
  @Column()
  displayName: string;
  @Column()
  avatarUrls: AvatarUrls;
  @Column()
  active: boolean;
  @Column()
  timeZone: string;
  @Column()
  locale: string;
}
