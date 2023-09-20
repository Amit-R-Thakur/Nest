import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private readonly user: UserDto[] = [
    { userId: 1, userName: "can't do", password: "can't do" },
    { userId: 2, userName: 'can do', password: 'can do' },
    { userId: 3, userName: 'will do', password: 'will do' },
    { userId: 4, userName: 'I did', password: 'I did' },
  ];

  async getUsers(): Promise<UserDto[]> {
    return this.user;
  }
}
