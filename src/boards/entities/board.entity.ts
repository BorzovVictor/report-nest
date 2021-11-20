import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Location } from "./location.entity";

@Entity()
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
}
