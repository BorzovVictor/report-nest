import {Inject, Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {WINSTON_MODULE_PROVIDER} from 'nest-winston';
import {Logger} from 'winston';
import {firstValueFrom} from 'rxjs';
import {JiraSearch} from './entities/jira-search.model';
import {JiraSearchQuery} from './requests/search-query';

@Injectable()
export class SearchService {
	private readonly root = '/rest/api/2/search';

	constructor(private client: HttpService, @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,) {
	}

	async search(filter: JiraSearchQuery): Promise<JiraSearch> {
		try {
			const {data} = await firstValueFrom(this.client.post<JiraSearch>(this.root, filter));
			return data;
		} catch (e) {
			this.logger.error(e);
			throw e;
		}
	}
}
