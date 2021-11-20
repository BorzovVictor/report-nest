import { User } from "../entities/user.entity";
import { JiraUser } from "../dto/JUser.model";

export const userToDto = (user: User): JiraUser => {
  return {
    ...user,
    emailAddress: user.emailAddress,
    avatarUrls: user.avatarUrls.toDto()
  };

};


export const userToEntity = (jiraUser: JiraUser): User => {
  return new User({
    ...jiraUser,
    avatarUrls: jiraUser.avatarUrls,
    emailAddress: jiraUser.emailAddress || '',
  });
}
