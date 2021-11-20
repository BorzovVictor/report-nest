import { AvatarUrls } from "../entities/avatarUrls.entity";

export class JAvatarUrls {
	'48x48': string;
	'24x24': string;
	'16x16': string;
	'32x32': string;

	public toEntity?():AvatarUrls {
		return {
			...this,
		}
	}
}
