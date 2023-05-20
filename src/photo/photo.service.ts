import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepo: Repository<Photo>,
  ) {}

  async create(createPhotoDto: CreatePhotoDto) {
    const newPhoto = this.photoRepo.create(createPhotoDto);
    const res = await this.photoRepo.save(newPhoto);
    return res;
  }

  async findAll() {
    const expandedPhoto = await this.photoRepo
      .createQueryBuilder('photo')
      .leftJoinAndSelect('photo.user', 'user')
      .getMany();
    // return this.photoRepo.find();
    return expandedPhoto;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
