import { Inject, Injectable } from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { JUserDetail } from './dto/JUserDetail.model';
import { UserFilterDto } from './dto/user-filter-dto';
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from 'winston';
import { UserRepository } from "./user.repository";
import { User } from "./entities/user.entity";
import { JiraUser } from "./dto/JUser.model";

@Injectable()
export class UsersService {
	private readonly root = '/rest/api/2/user';
	private readonly query = `${this.root}/search`;

	constructor(
		private client: HttpService,
		@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
		private readonly userRepository: UserRepository,
		) {
	}

	// rest/api/2/user/search?query=&includeActive=True&includeInactive=True&startAt=0&maxResults=200
	async get(filter: UserFilterDto): Promise<ReadonlyArray<JUserDetail>> {
		try {
			const params = this.buildSearchParams(filter);
			const result = await firstValueFrom(this.client.get<ReadonlyArray<JUserDetail>>(this.query, { params }));

			return result?.data;
		} catch (e) {
			this.logger.error(e)
			throw e;
		}
	}

	// rest/api/2/user?accountId=60d9d66a75365500708b9914
	async getByAccountId(userId: string): Promise<JiraUser> {
		try {
			const params = new URLSearchParams({ 'accountId': userId });
			const result = await firstValueFrom(this.client.get<JiraUser>(this.root, { params }));

			// const user = await this.userRepository.addUser(result.data);
			return result?.data;
		} catch (e) {
			this.logger.error(e)
			throw e;
		}
	}

	// rest/api/2/user/search?query=Mi
	async searchByNameOrEmail(userNameOrEmail: string): Promise<ReadonlyArray<JUserDetail>> {
		try {
			const params = new URLSearchParams({ 'query': userNameOrEmail });
			const result = await firstValueFrom(this.client.get<ReadonlyArray<JUserDetail>>(this.query, { params }));

			return result?.data;
		} catch (e) {
			this.logger.error(e)
			throw e;
		}
	}

	buildSearchParams(filter: UserFilterDto): URLSearchParams {
		const params = new URLSearchParams();
		params.append('query', filter.query ?? '');
		params.append('startAt', filter.startAt?.toString() ?? '0');
		params.append('maxResults', filter.maxResults?.toString() ?? '50');
		if (filter.includeActive) {
			params.append('includeActive', 'true');
		}
		if (filter.includeInactive) {
			params.append('includeInactive', 'true');
		}
		return params;
	}

	async syncJiraUsers() {
		const filter: UserFilterDto = {
			startAt: 0,
			maxResults: 900,
			includeActive: true,
			includeInactive: true,
			query: undefined,
		};

			const users = await this.get(filter);
			for (const user of users) {
				await this.userRepository.addUser(user)
			}
	}

}
