import { JAvatarUrls } from "../../common/models/jAvatarUrls";
import { ProjectCategory } from "./project-category";

export interface Project {
  self: string;
  id: string;
  key: string;
  name: string;
  avatarUrls: JAvatarUrls;
  projectCategory: ProjectCategory;
}
