import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './clients.controller';
import { ClientService } from './clients.service';

describe('ClientsController', () => {
  let controller: ClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [ClientService],
    }).compile();

    controller = module.get<ClientController>(ClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
