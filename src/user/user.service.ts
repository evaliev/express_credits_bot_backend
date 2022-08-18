import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getAll() {
    return await this.userRepository.find();
  }

  async getOne(id: string) {
    return await this.userRepository.findOneBy({ id });
  }

  async create(dto: CreateUserDto) {
    return await this.userRepository.save(dto);
  }

  async update(id: string, dto: UpdateUserDto) {
    const {
      raw: [updated],
    } = await this.userRepository
      .createQueryBuilder()
      .update(User)
      .set(dto)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    return updated;
  }
  
  async delete(id: string) {
    const { affected: deleted } = await this.userRepository.delete(id);
  
    return { deleted };
  }
}
