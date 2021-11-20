import { JiraUser } from './JUser.model';

export interface JUserDetail extends JiraUser {
	key: string;
	name: string;
	groups?: ApplicationRoles;
	expand: string;
}

export class ApplicationRoles {
	size: number;
	items: [];
}
