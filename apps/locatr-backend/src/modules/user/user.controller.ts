import { DeleteResult } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Query, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUserInterceptor } from 'src/middleware';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(createUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findOne(@Query('id') id: string): Promise<UserEntity | null> {
    return this.userService.findOneBy(id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  @UseInterceptors(ClassSerializerInterceptor)
  update(@Query('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete()
  remove(@Query('id') id: string): Promise<DeleteResult> {
    return this.userService.remove(id);
  }
}
