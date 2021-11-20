import { Comment } from "./comment";

export interface JiraIssueComment {
  startAt: number;
  maxResults: number;
  total: number;
  comments: Comment[];
}
