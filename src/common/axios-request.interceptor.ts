import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { getEncodedToken } from "./utils/utils";
import { jiraConfig } from "../configs";

@Injectable()
export class AxiosRequestInterceptor implements NestInterceptor {
  private readonly baseUrl: string;
  private readonly token: string;

  constructor(
    private client: HttpService,
  ) {
    this.baseUrl = jiraConfig.baseUrl;
    this.token = getEncodedToken();
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.client.axiosRef.interceptors.request.use((config) => {
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
    return next.handle();
  }
}
