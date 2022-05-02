import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { ProjectsModule } from './projects/projects.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { IssuesModule } from './issues/issues.module';
import { SearchModule } from './search/search.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typeorm.config';
import { jiraConfig, logConfig } from './configs';
import { ScheduleModule } from '@nestjs/schedule';
import { JiraSyncModule } from './scheduler/jira-sync.module';
import { getEncodedToken } from './common/utils/utils';
import { ReportModule } from './report/report.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [
	HttpModule,
	TypeOrmModule.forRoot(typeormConfig),
	ScheduleModule.forRoot(),
	WinstonModule.forRootAsync({
		useFactory: () => ({
		transports: [
			new DailyRotateFile({
			filename: `${process.cwd()}/${logConfig.path}/%DATE%.log`,
			datePattern: 'YYYY-MM-DD-HH',
			level: logConfig.level,
			format: winston.format.combine(
				winston.format.timestamp(),
				nestWinstonModuleUtilities.format.nestLike()
			)
			}),
			new winston.transports.Console({
			format: winston.format.combine(
				winston.format.timestamp(),
				nestWinstonModuleUtilities.format.nestLike()
			)
			})
		]
		})
	}),
	UsersModule,
	BoardsModule,
	ProjectsModule,
	IssuesModule,
	SearchModule,
	JiraSyncModule,
	ReportModule,
	SkillsModule
  ],
  controllers: [AppController],
  providers: [
	AppService
  ]
})
export class AppModule implements OnModuleInit {
  private readonly baseUrl: string;
  private readonly token: string;

  constructor(private httpService: HttpService) {
	this.baseUrl = jiraConfig.baseUrl;
	this.token = getEncodedToken();
  }

	// tslint:disable-next-line:no-any
  onModuleInit(): any {
	this.httpService.axiosRef.interceptors.request.use((config) => {
		return this.token && this.baseUrl
		? {
			...config,
			baseURL: this.baseUrl,
			headers: {
			Authorization: this.token
			}
		}
		: config;
	});
  }
}
