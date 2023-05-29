import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { City } from './entities/city.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    return this.cityService.create(createCityDto);
  }

  @Post('createAllCities')
  createAllCities() {
    return this.cityService.createAll();
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) :Promise<Paginated<City>> {
    return this.cityService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
