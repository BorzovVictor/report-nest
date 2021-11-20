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
  const user = new User();
  user.self = jiraUser.self;
  user.accountId = jiraUser.accountId;
  user.accountType = jiraUser.accountType;
  user.active = jiraUser.active;
  user.emailAddress = jiraUser.emailAddress || '';
  user.avatarUrls = jiraUser.avatarUrls;
  user.displayName = jiraUser.displayName;
  user.active = jiraUser.active;
  user.timeZone = jiraUser.timeZone;
  user.locale = jiraUser.locale;
  return user;
}
