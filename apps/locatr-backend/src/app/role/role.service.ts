import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
// entities
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) {}

  create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleRepository.save(createRoleDto);
  }

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  findOne(id: string) {
    return this.roleRepository.findOne({ where: { id } });
  }

  update(id: string, updateRoleDto: UpdateRoleDto): Promise<UpdateResult> {
    return this.roleRepository.update(id, updateRoleDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.roleRepository.delete(id);
  }
}
