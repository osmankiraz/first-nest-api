import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userInstance = this.usersRepository.create(createUserDto);
    const res = await this.usersRepository.save(userInstance);
    return res;
  }

  async findAll() {
    const expandedUsers = await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.address', 'address')
      .leftJoinAndSelect('user.photos', 'photo')
      .getMany();
    return expandedUsers;
  }

  async findOne(id: number) {
    const expandedUser = await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.address', 'address')
      .where(`user.id = ${id}`)
      .getOne();
    if (expandedUser) {
      return expandedUser;
    } else {
      throw new HttpException(
        `User with id ${id} not found `,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.findOne(id);
    user = {
      ...user,
      ...updateUserDto,
    };
    // const res = await this.usersRepository.update(user.id, user);
    const res = await this.usersRepository.save(user);
    return res;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    const res = await this.usersRepository.remove(user);
    if (res) {
      throw new HttpException(`User with id  ${id} deleted `, HttpStatus.OK);
    }
  }
}
