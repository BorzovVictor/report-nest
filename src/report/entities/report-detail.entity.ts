import { Column, Entity, ObjectIdColumn } from "typeorm";
import { CodeQuality } from "./code-quality.entity";

@Entity()
export class ReportDetail {
  @ObjectIdColumn()
  _id: string;
  @Column()
  month: number;
  @Column()
  year: number;
  @Column()
  specificationMeet?: number;
  @Column()
  specificationMeetNote?: string;
  @Column()
  codeQuality: CodeQuality;
  @Column()
  learningSpeed?: number;
  @Column()
  learningSpeedNote?: string;
  @Column()
  speed?: number;
  @Column()
  speedNote?: string;
  @Column()
  needsSupport?: number;
  @Column()
  needsSupportNote?: string;
  @Column()
  providesSupport?: number;
  @Column()
  providesSupportNote?: string;
  @Column()
  customerTeamCommunication?: number;
  @Column()
  customerTeamCommunicationNote?: string;
}
