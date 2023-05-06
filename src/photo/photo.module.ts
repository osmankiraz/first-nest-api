import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { Photo } from './entities/photo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Photo])],
  controllers: [PhotoController],
  providers: [PhotoService]
})
export class PhotoModule {}
