import { Controller, Get, Param, ParseIntPipe} from "@nestjs/common";
import { BoardsService } from './boards.service';
import { JBoardQuery } from "./entities/JBoardQuery.model";
import { JBoardItem } from "./entities/JBoardItem.model";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Boards')
@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async getBoards(): Promise<JBoardQuery> {
    return this.boardsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<JBoardItem> {
    return this.boardsService.getById(id);
  }
}
