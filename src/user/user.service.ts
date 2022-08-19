import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAll() {
    return await this.userRepository.find();
  }

  async getOne(id: string) {
    return await this.userRepository.findOneBy({ id });
  }

  async getOneByTel(tel: string) {
    return await this.userRepository.findOneBy({ tel });
  }

  async create(dto: CreateUserDto) {
    return await this.userRepository.save(dto);
  }

  async delete(id: string) {
    const { affected: deleted } = await this.userRepository.delete(id);

    return { deleted };
  }
}
