import {Body, Controller, Post} from '@nestjs/common';
import {SearchService} from './search.service';
import {JiraSearchQuery} from './requests/search-query';
import {JiraSearch} from './entities/jira-search.model';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('Search jql')
@Controller('search')
export class SearchController {
	constructor(private readonly service: SearchService) {
	}


	@Post()
	async search(@Body() filter: JiraSearchQuery): Promise<JiraSearch> {
		return this.service.search(filter);
	}
}
