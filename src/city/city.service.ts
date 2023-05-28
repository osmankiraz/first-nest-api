import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import {
  FilterOperator,
  FilterSuffix,
  PaginateQuery,
  paginate,
} from 'nestjs-paginate';
import { citiesOfTurkey } from './allTurkeyCity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepo: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto) {
    const newCity = this.cityRepo.create(createCityDto);
    const _findedCity = await this.cityRepo.findOneBy({ name: newCity.name });
    const _findedCity2 = await this.cityRepo.findOneBy({
      plate: newCity.plate,
    });
    if (_findedCity || _findedCity2) {
      throw new HttpException(`The city Already exist`, HttpStatus.BAD_REQUEST);
    }
    const res = await this.cityRepo.save(newCity);
    return res;
  }

  async createAll() {
    const _cities = citiesOfTurkey;
    const findedCity = this.cityRepo.find({
      skip: 0,
      take: 1,
    });
    if (findedCity) {
      throw new HttpException(
        `Db has already cities `,
        HttpStatus.NOT_ACCEPTABLE,
      );
    } else {
      _cities.forEach(async (element) => {
        const newCity = this.cityRepo.create();
        newCity.plate = element[0] as number;
        newCity.name = element[1] as string;
        const res = await this.cityRepo.save(newCity);
      });
      throw new HttpException(`Created All Cities of Turkey `, HttpStatus.OK);
    }
  }

  findAll(query: PaginateQuery) {
    return paginate(query, this.cityRepo, {
      sortableColumns: ['id'],
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['name', 'plate'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
        plate: true,
      },
      select:['id','name','plate']
    });
    /* {
      sortableColumns: ['id', ],
      nullSort: 'last',
      defaultSortBy: [['id', 'ASC']],
      searchableColumns: ['name'],
      select: ['id', 'name'],
    } */
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
