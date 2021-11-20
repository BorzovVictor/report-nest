import { Module } from "@nestjs/common";
import { JiraSyncService } from "./jira-sync.service";
import { UsersModule } from "../users/users.module";

@Module({
  imports:[UsersModule],
  providers: [JiraSyncService]
})
export class JiraSyncModule {}
