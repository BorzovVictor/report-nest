export interface JiraIssueType {
  self: string;
  id: string;
  description: string;
  iconUrl: string;
  name: string;
  untranslatedName: string;
  subtask: boolean;
  avatarId?: number;
  hierarchyLevel: number;
  scope?: JiraIssueTypeScope;
}

export interface JiraIssueTypeScope {
  type: string;
  project: JiraIssueTypeProject;
}

export interface JiraIssueTypeProject {
  id: string;
}
