import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm';
import { Location } from './location.entity';

@Entity({name: 'boards'})
export class Board {
  @ObjectIdColumn()
  id: number;
  @Column()
  self: string;
  @Column()
  name: string;
  @Column()
  type: string;
  @Column()
  location: Location;
  @Column('timestampz')
  @CreateDateColumn()
  created_at: Date;
  @Column('timestampz')
  @UpdateDateColumn()
  updateAt: Date;

  public constructor(init?:Partial<Board>) {
	Object.assign(this, init);
  }
}
