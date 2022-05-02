import { Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { AvatarUrls } from '../../common/entities/avatarUrls.entity';

@Entity({name: 'users'})
export class User {
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
  @Column('timestampz')
  @CreateDateColumn()
  createdAt: Date;
  @Column('timestampz')
  @UpdateDateColumn()
  updateAt: Date;

  public constructor(init?: Partial<User>) {
	Object.assign(this, init);
  }
}
