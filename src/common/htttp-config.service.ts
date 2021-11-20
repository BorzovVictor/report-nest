import { Injectable } from "@nestjs/common";
import { HttpModuleOptions, HttpModuleOptionsFactory } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { getEncodedToken } from "./utils/utils";
import { jiraConfig } from "../configs";

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  createHttpOptions(): HttpModuleOptions {
    return {
      baseURL: jiraConfig.baseUrl,
      headers: {
        Authorization: getEncodedToken(),
      }
    };
  }
}
