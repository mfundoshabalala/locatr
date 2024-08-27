import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { EmployeeEntity } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(EmployeeEntity) private employeeRepository: Repository<EmployeeEntity>) {}

  create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity> {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  findAll(): Promise<EmployeeEntity[]> {
    return this.employeeRepository.find();
  }

  findOne(id: string): Promise<EmployeeEntity | null> {
    return this.employeeRepository.findOne({ where: { id } });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeeEntity> {
    try {
      return this.employeeRepository.save(updateEmployeeDto);
    } catch (error) {
      throw new Error('Error updating employee.');
    }
  }

  remove(id: string): Promise<DeleteResult> {
    return this.employeeRepository.delete(id);
  }
}
