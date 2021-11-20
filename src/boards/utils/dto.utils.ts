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
  const board = new Board();
  board.self = jBoard.self;
  board.id = jBoard.id;
  board.name = jBoard.name;
  board.type = jBoard.type;
  board.location = locationToEntity(jBoard.location);
  return board;
}

export const locationToEntity = (jLocation: JLocation): Location => {
  const location = new Location();
  location.name = jLocation.name;
  location.displayName = jLocation.displayName;
  location.projectId = jLocation.projectId;
  location.projectName = jLocation.projectName;
  location.projectKey = jLocation.projectKey;
  location.projectTypeKey = jLocation.projectTypeKey;
  location.avatarURI = jLocation.avatarURI;
  return location;
}
