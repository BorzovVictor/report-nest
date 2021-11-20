import { Board } from "../entities/board.entity";
import { JBoardItem } from "../dto/JBoardItem.model";
import { Location } from "../entities/location.entity";
import { JLocation } from "../../users/dto/JLocation.model";

export const boardToDto = (board: Board): JBoardItem => {
  return {
    ...board,
    location: {...board.location},
  }
}

export const boardToEntity = (jBoard: JBoardItem): Board => {
  return new Board({
    ...jBoard,
    location: locationToEntity(jBoard.location),
  });
}

export const locationToEntity = (jLocation: JLocation): Location => {
  return new Location({ ...jLocation });
}
