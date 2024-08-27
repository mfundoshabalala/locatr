import { DeleteResult, UpdateResult } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Query, Delete } from '@nestjs/common';


import { RoleService } from './role.service';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string): Promise<Role | null> {
    return this.roleService.findOne(id);
  }

  @Patch()
  update(@Query('id') id: string, @Body() updateRoleDto: UpdateRoleDto): Promise<UpdateResult> {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete()
  remove(@Query('id') id: string): Promise<DeleteResult> {
    return this.roleService.remove(id);
  }
}
