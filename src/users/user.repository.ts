import { EntityRepository, MongoRepository} from "typeorm";
import { User } from "./entities/user.entity";
import { JiraUser } from "./dto/JUser.model";
import { userToEntity } from "./utils/dto.utils";

@EntityRepository(User)
export class UserRepository extends MongoRepository<User> {

  async addUser(jiraUser: JiraUser): Promise<User> {
    const existingUser = await this.findOne({ accountId: jiraUser.accountId });
    if (existingUser) {
      return await this.updateUser(existingUser._id, jiraUser);
    }
    const newUser = userToEntity(jiraUser);
    return await this.save(newUser);
  }

  async updateUser(userId: string, dataForUpdate: JiraUser): Promise<User> {
    const userFromDto = userToEntity(dataForUpdate);
    const result = await this.update(userId, userFromDto);
    if(result.affected) {
      console.log({'users updated': result.affected});
    }
    return userFromDto;
  }
}
