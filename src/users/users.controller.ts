import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserFilterDto } from './dto/user-filter-dto';
import { JUserDetail } from './dto/JUserDetail.model';
import { ApiTags } from '@nestjs/swagger';
import { JiraUser } from './dto/JUser.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  async getUsers(@Query() filter: UserFilterDto = {}): Promise<ReadonlyArray<JUserDetail>> {
	return this.usersService.getUsers(filter);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<JiraUser> {
	return this.usersService.getByAccountId(id);
  }
}
