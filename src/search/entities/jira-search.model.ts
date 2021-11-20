import { JiraIssue } from "../../issues/entities/JIssue.model";

export interface JiraSearch {
  expand:     string;
  startAt:    number;
  maxResults: number;
  total:      number;
  issues:     JiraIssue[];
}
