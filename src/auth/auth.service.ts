import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthRequestDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(dto: AuthRequestDto) {
    const user = await this.userService.getOne(dto);

    if (user) {
      return { userId: user.id };
    }

    const newUser = await this.userService.create(dto);
    return { userId: newUser.id };
  }
}
