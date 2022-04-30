import { Author } from './author';
import { Visibility } from './visibility';

export interface Worklog {
  self: string;
  author: Author;
  updateAuthor: Author;
  comment: string;
  updated: string;
  visibility: Visibility;
  started: string;
  timeSpent: string;
  timeSpentSeconds: number;
  id: string;
  issueId: string;
}


