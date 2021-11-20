import { Controller, Get, Param, Query } from "@nestjs/common";
import { IssuesService } from "./issues.service";
import { JiraIssue } from "./entities/JIssue.model";
import { JiraIssueComment } from "./entities/jira-issue-comment";
import { CommentsFilter } from "./requests/comments-filter";
import { JiraIssueWorklog } from "./entities/jira-issue-worklog";
import { JiraIssueType } from "./entities/jira-issue-type";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Issues')
@Controller("issues")
export class IssuesController {
  constructor(private readonly service: IssuesService) {
  }

  @Get("/getTypes")
  async getTypes(): Promise<JiraIssueType> {
    return this.service.getTypes();
  }

  @Get(":idOrKey")
  async getById(@Param("idOrKey") idOrKey: string): Promise<JiraIssue> {
    return this.service.getByIdOrKey(idOrKey);
  }

  @Get(":idOrKey/comment")
  async getComments(
    @Query() filter: CommentsFilter,
    @Param("idOrKey") idOrKey: string
  ): Promise<ReadonlyArray<JiraIssueComment>> {
    return this.service.getComments(filter, idOrKey);
  }

  @Get(":idOrKey/worklog")
  async getWorklogs(@Param("idOrKey") idOrKey: string): Promise<JiraIssueWorklog> {
    return this.service.getWorklogs(idOrKey);
  }

}
