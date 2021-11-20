import { Author } from "./author";
import { Comment } from "./comment";
import { Names } from "./names";
import { Worklog } from "./worklog";
import { Timetracking } from "./timetracking";
import { Watcher } from "./watcher";
import { Project } from "./project";

export interface JiraIssue {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: JiraIssueFields;
  names: Names;
}

export interface JiraIssueFields {
  watcher: Watcher;
  attachment: Attachment[];
  "sub-tasks": Issuelink[];
  description: string;
  project: Project;
  comment: Comment[];
  issuelinks: Issuelink[];
  worklog: Worklog[];
  updated: number;
  timetracking: Timetracking;
}

export interface Attachment {
  self: string;
  filename: string;
  author: Author;
  created: string;
  size: number;
  mimeType: string;
  content: string;
  thumbnail: string;
}

export interface Issuelink {
  id: string;
  type: IssueType;
  outwardIssue?: WardIssue;
  inwardIssue?: WardIssue;
}

export interface WardIssue {
  id: string;
  key: string;
  self: string;
  fields: InwardIssueFields;
}

export interface InwardIssueFields {
  status: IssueStatus;
}

export interface IssueStatus {
  iconUrl: string;
  name: string;
}

export interface IssueType {
  id: string;
  name: string;
  inward: string;
  outward: string;
}

