import {ApiProperty} from '@nestjs/swagger';

export class JiraSearchQuery {
	@ApiProperty({
		description: 'Performs a search using JQL',
		default: ''
	})
	jql: string;
	@ApiProperty({
		description: 'the index of the first issue to return (0-based)'
	})
	startAt: number;
	@ApiProperty({
		description: 'the maximum number of issues to return (defaults to 50). The maximum allowable value is dictated by the JIRA property \'jira.search.views.default.max\'. If you specify a value that is higher than this number, your search results will be truncated.',
		minimum: 1,
		default: 20
	})
	maxResults: number;
	@ApiProperty({
		description: 'the list of fields to return for each issue. By default, all navigable fields are returned',
		default: []
	})
	fields: string[];
}
