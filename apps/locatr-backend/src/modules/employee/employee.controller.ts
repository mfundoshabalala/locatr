import { Controller, Get, Post, Body, Patch, Delete, Query, UseInterceptors } from '@nestjs/common';

import { EmployeeService } from './employee.service';
import { EmployeeEntity } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CurrentUserInterceptor } from 'src/middleware';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity> {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll(): Promise<EmployeeEntity[]> {
    return this.employeeService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  update(@Query('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.employeeService.remove(id);
  }
}
