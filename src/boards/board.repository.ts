import { EntityRepository, MongoRepository } from 'typeorm';
import { Board } from './entities/board.entity';
import { JBoardItem } from './dto/JBoardItem.model';
import { boardToEntity } from './utils/dto.utils';
import {Inject} from '@nestjs/common';
import {WINSTON_MODULE_PROVIDER} from 'nest-winston';
import {Logger} from 'winston';

@EntityRepository(Board)
export class BoardRepository extends MongoRepository<Board> {
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {
	super();
  }
  async addBoard(jBoard: JBoardItem): Promise<Board> {
	const existingBoard = await this.findOne({ id: jBoard.id });
	if (existingBoard) {
		return this.updateBoard(existingBoard.id, jBoard);
	}

	const newBoard = boardToEntity(jBoard);
	return this.save(newBoard);
  }

  async updateBoard(boardId: number, dataForUpdate: JBoardItem): Promise<Board> {
	const boardFromDto = boardToEntity(dataForUpdate);
	const result = await this.update(boardId, boardFromDto);
	if(result.affected) {
		this.logger.info({ 'boards updated': result.affected, boardId: boardId });
	}
	return boardFromDto;
  }
}
