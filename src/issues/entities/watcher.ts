import { Author } from "./author";

export interface Watcher {
  self: string;
  isWatching: boolean;
  watchCount: number;
  watchers: Author[];
}
