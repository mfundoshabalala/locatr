import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor (@InjectRepository(Employee) private employeeRepository: Repository<Employee>){}

  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeRepository.save(createEmployeeDto);
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id } });
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<UpdateResult> {
    return this.employeeRepository.update(id, updateEmployeeDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.employeeRepository.delete(id);
  }
}
