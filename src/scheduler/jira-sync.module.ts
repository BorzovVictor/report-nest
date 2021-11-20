import { Module } from "@nestjs/common";
import { JiraSyncService } from "./jira-sync.service";
import { UsersModule } from "../users/users.module";
import { BoardsModule } from "../boards/boards.module";

@Module({
  imports: [
    UsersModule,
    BoardsModule,
  ],
  providers: [
    JiraSyncService,
  ]
})
export class JiraSyncModule {
}
