import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { UsersService } from "../users/users.service";

@Injectable()
export class JiraSyncService {
  constructor(private readonly userService: UsersService) {
  }
  @Cron(CronExpression.EVERY_HOUR )
  async handleUpdateUsers() {
    await this.userService.syncJiraUsers();
  }
}
