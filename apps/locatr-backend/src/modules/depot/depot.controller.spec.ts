import { Test, TestingModule } from '@nestjs/testing';
import { DepotController } from './depot.controller';
import { DepotService } from './depot.service';

describe('DepotController', () => {
  let controller: DepotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepotController],
      providers: [DepotService],
    }).compile();

    controller = module.get<DepotController>(DepotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
