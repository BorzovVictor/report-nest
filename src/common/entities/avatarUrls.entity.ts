import { JAvatarUrls } from "../models/jAvatarUrls";

export class AvatarUrls {
  '48x48': string;
  '24x24': string;
  '16x16': string;
  '32x32': string;

  public toDto?(): JAvatarUrls {
    return {
      ...this
    }
  }
}
