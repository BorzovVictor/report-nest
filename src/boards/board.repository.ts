import { EntityRepository, MongoRepository } from "typeorm";
import { Board } from "./entities/board.entity";
import { JBoardItem } from "./dto/JBoardItem.model";
import { boardToEntity } from "./utils/dto.utils";

@EntityRepository(Board)
export class BoardRepository extends MongoRepository<Board> {
  async addBoard(jBoard: JBoardItem): Promise<Board> {
    const existingBoard = await this.findOne({ id: jBoard.id });
    if (existingBoard) {
      return await this.updateBoard(existingBoard.id, jBoard);
    }

    const newBoard = boardToEntity(jBoard);
    return await this.save(newBoard);
  }

  async updateBoard(boardId: number, dataForUpdate: JBoardItem): Promise<Board> {
    const boardFromDto = boardToEntity(dataForUpdate);
    const result = await this.update(boardId, boardFromDto);
    if(result.affected) {
      console.log({ "boards updated": result.affected });
    }
    return boardFromDto;
  }
}
