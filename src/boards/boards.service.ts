import { Inject, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { JBoardQuery } from "./dto/JBoardQuery.model";
import { firstValueFrom } from "rxjs";
import { JBoardItem } from "./dto/JBoardItem.model";
import { BoardRepository } from "./board.repository";

@Injectable()
export class BoardsService {
  private readonly root = 'rest/agile/1.0/board';

  constructor(
    private client: HttpService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly boardRepository: BoardRepository,
    ) {
  }

  async getAll(): Promise<JBoardQuery> {
    try {
      const result = await firstValueFrom(this.client.get<JBoardQuery>(this.root));
      return result?.data;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async getById(boardId: number): Promise<JBoardItem> {
    try {
      const result = await firstValueFrom(this.client.get<JBoardItem>(`${this.root}/${boardId}`));
      return result?.data;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async syncJiraBoards() {
    const boards = await this.getAll();
    for (const board of boards.values) {
      await this.boardRepository.addBoard(board);
    }
  }

}
