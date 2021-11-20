import { Inject, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { firstValueFrom } from "rxjs";
import { JiraIssue } from "./entities/JIssue.model";
import { JiraIssueComment } from "./entities/jira-issue-comment";
import { CommentsFilter } from "./requests/comments-filter";
import { JiraIssueWorklog } from "./entities/jira-issue-worklog";
import { JiraIssueType } from "./entities/jira-issue-type";

@Injectable()
export class IssuesService {
  private readonly root = "/rest/api/2/issue";

  constructor(private client: HttpService, @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {
  }

  async getByIdOrKey(idOrKey: string): Promise<JiraIssue> {
    try {
      const { data } = await firstValueFrom(this.client.get<JiraIssue>(`${this.root}/${idOrKey}`));
      return data;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async getComments(filter: CommentsFilter, idOrKey: string): Promise<ReadonlyArray<JiraIssueComment>> {
    try {
      const params = this.buildSearchParams(filter);
      const { data } = await firstValueFrom(this.client.get<ReadonlyArray<JiraIssueComment>>(`${this.root}/${idOrKey}/comment`, { params }));
      return data;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async getWorklogs(idOrKey: string): Promise<JiraIssueWorklog> {
    try {
      const { data } = await firstValueFrom(this.client.get<JiraIssueWorklog>(`${this.root}/${idOrKey}/worklog`));
      return data;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async getTypes(): Promise<JiraIssueType> {
    try {
      const { data } = await firstValueFrom(this.client.get<JiraIssueType>(`/rest/api/2/issuetype`));
      return data;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  buildSearchParams(filter: CommentsFilter): URLSearchParams {
    const params = new URLSearchParams();
    if (!filter) {
      return params;
    }
    filter.startAt && params.append("startAt", filter.startAt?.toString() ?? "0");
    params.append("maxResults", filter.maxResults?.toString() ?? "50");
    if (filter.orderBy) {
      params.append("orderBy", filter.orderBy);
    }
    if (filter.expand) {
      params.append("expand", filter.expand);
    }
    return params;
  }
}
