import {Module} from '@nestjs/common';
import {JiraSyncService} from './jira-sync.service';
import {UsersModule} from '../users/users.module';
import {BoardsModule} from '../boards/boards.module';
import {ProjectsModule} from '../projects/projects.module';

@Module({
	imports: [
		UsersModule,
		BoardsModule,
		ProjectsModule,
	],
	providers: [
		JiraSyncService,
	]
})
export class JiraSyncModule {
}
