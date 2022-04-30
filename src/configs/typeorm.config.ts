import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import * as config from 'config';
import {DbConfig} from './db.config';
import {AppConfigEnum} from '../common/enums/app.config-enum';

const dbConfig: DbConfig = config.get<DbConfig>(AppConfigEnum.DB);
export const typeormConfig: TypeOrmModuleOptions = {
	type: 'mongodb',
	host: dbConfig.host,
	port: dbConfig.port,
	username: dbConfig.login,
	password: dbConfig.password,
	useUnifiedTopology: true,
	useNewUrlParser: true,
	entities: [__dirname + '/../**/*.entity{.ts,.js}'],
	synchronize: true,
};
