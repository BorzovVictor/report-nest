import { JAvatarUrls } from "../../common/models/jAvatarUrls";

export interface JiraProject {
  expand: string;
  self: string;
  id: string;
  key: string;
  name: string;
  avatarUrls: JAvatarUrls;
  projectTypeKey: string;
  simplified: boolean;
  style: string;
  isPrivate: boolean;
  entityId?: string;
  uuid?: string;
}
