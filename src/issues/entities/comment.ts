import { Author } from "./author";
import { Visibility } from "./visibility";

export interface Comment {
  self: string;
  id: string;
  author: Author;
  body: string;
  updateAuthor: Author;
  created: string;
  updated: string;
  visibility: Visibility;
}
