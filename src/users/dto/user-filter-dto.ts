import { ApiProperty } from "@nestjs/swagger";

export class UserFilterDto {
	@ApiProperty({
		description: 'search by userName or email',
		default: '',
		required: false
	})
	query?: string;
	@ApiProperty({
		description: 'the index of the first issue to return (0-based)',
		default: 0,
		required: false
	})
	startAt?:    number;
	@ApiProperty({
		description: 'the maximum number of issues to return (defaults to 50). The maximum allowable value is dictated by the JIRA property \'jira.search.views.default.max\'. If you specify a value that is higher than this number, your search results will be truncated.',
		minimum: 1,
		default: 20,
	})
	maxResults?: number;
	@ApiProperty({
		default: true,
		required: false
	})
	includeActive?: boolean;
	@ApiProperty({
		default: false,
		required: false
	})
	includeInactive?: boolean;
}
