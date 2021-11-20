import * as config from 'config';
import { AppConfigEnum } from "../common/enums/app.config-enum";
import { JiraConfig } from "./jira.config";
import { LogConfig } from "./log.config";
import { SwaggerConfig } from "./swagger.config";

export const jiraConfig: JiraConfig = config.get<JiraConfig>(AppConfigEnum.JIRA);
export const logConfig: LogConfig = config.get<LogConfig>(AppConfigEnum.LOGS);
export const swaggerConfig: SwaggerConfig = config.get(AppConfigEnum.SWAGGER);
