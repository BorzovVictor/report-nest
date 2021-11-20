import { JLocation } from '../../users/dto/JLocation.model';

export interface JBoardItem {
	id: number;
	self: string;
	name: string;
	type: string;
	location: JLocation;
}
