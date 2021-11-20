import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { JUserFilter } from '../jira/users/models/JUserFilter';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

describe('UsersService', () => {
	let service: UsersService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				ConfigModule,
				HttpModule
			],
			providers: [UsersService]
		}).compile();

		service = module.get<UsersService>(UsersService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should build correct searchString', () => {
		const filter: JUserFilter = {
			query: 'Mi',
			includeInactive: true,
			includeActive: true,
			startAt: 2,
			maxResults: 200
		};

		const searchString = service.buildSearchParams(filter);

		const expectedSearchString = new URLSearchParams([
			['query', filter.query],
			['startAt', String(filter.startAt)],
			['maxResults', String(filter.maxResults)],
			['includeActive', String(filter.includeActive)],
			['includeInactive', String(filter.includeInactive)]
		]);

		const wrongSearchString = new URLSearchParams([
			['query', 'WrongQuery'],
			['startAt', String(filter.startAt)],
			['maxResults', String(filter.maxResults)],
			['includeActive', String(filter.includeActive)],
			['includeInactive', String(filter.includeInactive)]
		]);

		expect(searchString).toMatchObject(expectedSearchString);
		expect(searchString).not.toMatchObject(wrongSearchString);
	});
});
