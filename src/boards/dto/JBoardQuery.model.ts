import { JBoardItem } from './JBoardItem.model';

export interface JBoardQuery {
	maxResults: number;
	startAt: number;
	total: number;
	isLast: boolean;
	values: ReadonlyArray<JBoardItem>;
}
