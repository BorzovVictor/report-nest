import { JAvatarUrls } from '../../common/models/jAvatarUrls';
import { Column } from "typeorm";

export class JiraUser {
	self:         string;
	accountId:    string;
	accountType:  string;
	emailAddress: string;
	avatarUrls:   JAvatarUrls;
	displayName:  string;
	active:       boolean;
	timeZone:     string;
	locale:       string;
}
