import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm';
import { AvatarUrls } from '../../common/entities/avatarUrls.entity';

@Entity({name: 'projects'})
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
  @Column('timestampz')
  @CreateDateColumn()
  created_at: Date;
  @Column('timestampz')
  @UpdateDateColumn()
  updateAt: Date;

  public constructor( init?: Partial<Project> ) {
	  Object.assign(this, init);
  }
}
