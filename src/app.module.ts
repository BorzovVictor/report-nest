import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { WinstonModule, utilities as nestWinstonModuleUtilities, } from "nest-winston";
import * as winston from "winston";
import * as DailyRotateFile  from "winston-daily-rotate-file"
import { ProjectsModule } from './projects/projects.module';
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AxiosRequestInterceptor } from "./common/axios-request.interceptor";
import { HttpModule, HttpService } from "@nestjs/axios";
import { IssuesModule } from './issues/issues.module';
import { SearchModule } from './search/search.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "./configs/typeorm.config";
import { logConfig } from "./configs";
import { ScheduleModule } from "@nestjs/schedule";
import { JiraSyncModule } from "./scheduler/jira-sync.module";

@Module({
	imports: [
		HttpModule,
		TypeOrmModule.forRoot(typeormConfig),
		ScheduleModule.forRoot(),
		WinstonModule.forRootAsync({
			useFactory: () => ({
				transports: [
					new DailyRotateFile ({
						filename: `${process.cwd()}/${logConfig.path}/%DATE%.log`,
						datePattern: 'YYYY-MM-DD-HH',
						level: logConfig.level,
						format: winston.format.combine(
							winston.format.timestamp(),
							nestWinstonModuleUtilities.format.nestLike(),
						),
					}),
					new winston.transports.Console({
						format: winston.format.combine(
							winston.format.timestamp(),
							nestWinstonModuleUtilities.format.nestLike(),
						),
					}),
				],
			}),
		}),
		UsersModule,
		BoardsModule,
		ProjectsModule,
		IssuesModule,
		SearchModule,
		JiraSyncModule,
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_INTERCEPTOR,
			useClass: AxiosRequestInterceptor,
			inject: [HttpService],
		},
	]
})
export class AppModule {
}
