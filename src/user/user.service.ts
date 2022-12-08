import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { AuthRequestDto } from 'src/auth/auth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getOne({ INN, chatId }: AuthRequestDto) {
    return await this.userRepository.findOne({
      where: {
        INN,
        chatId,
      },
    });
  }

  async create(dto: AuthRequestDto) {
    return await this.userRepository.save(dto);
  }
}
