import { Worklog } from "./worklog";

export interface JiraIssueWorklog {
  startAt: number;
  maxResults: number;
  total: number;
  worklogs: Worklog[];
}
