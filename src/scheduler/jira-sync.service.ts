import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { UsersService } from "../users/users.service";
import { BoardsService } from "../boards/boards.service";
import { ProjectsService } from "../projects/projects.service";

@Injectable()
export class JiraSyncService {
  constructor(
    private readonly userService: UsersService,
    private readonly boardService: BoardsService,
    private readonly projectService: ProjectsService,
    ) {
  }
  @Cron(CronExpression.EVERY_HOUR )
  async handleUpdateUsers() {
    await this.userService.syncJiraUsers();
  }

  @Cron(CronExpression.EVERY_HOUR )
  async handleUpdateBoards() {
    await this.boardService.syncJiraBoards();
  }

  @Cron(CronExpression.EVERY_HOUR)
  async handleUpdateProjects() {
    await this.projectService.syncJiraProjects();
  }
}
