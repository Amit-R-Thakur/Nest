import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly userServise: UserService) {}

  @Get()
  getUsers() {
    return this.userServise.getUsers();
  }
}
