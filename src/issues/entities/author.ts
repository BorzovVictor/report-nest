import { JAvatarUrls } from "../../common/models/jAvatarUrls";

export interface Author {
  self: string;
  name: string;
  avatarUrls?: JAvatarUrls;
  displayName: string;
  active: boolean;
}
