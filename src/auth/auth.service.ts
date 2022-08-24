import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(dto: LoginDto) {
    const user = await this.userService.getOneByTel(dto.tel);

    if (user) {
      return { userId: user.id };
    }

    const newUser = await this.userService.create(dto);
    return { userId: newUser.id };
  }
}
