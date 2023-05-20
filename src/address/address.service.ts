import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepo: Repository<Address>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    const _address = this.addressRepo.create(createAddressDto);
    const _findedUser = await this.userRepo.findOneBy({ id: _address.user.id });
    console.log("finded user => ",_findedUser);
    
    let res: any = {};
    if (_findedUser) {
      await this.addressRepo.save(_address).then((newAddress) => {
        res = newAddress;
        _findedUser.address = newAddress;
        this.userRepo.save(_findedUser);
      });
    } else {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    return res;
  }

  findAll() {
    return this.addressRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
