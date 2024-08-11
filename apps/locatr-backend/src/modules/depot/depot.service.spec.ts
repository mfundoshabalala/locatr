import { Test, TestingModule } from '@nestjs/testing';
import { DepotService } from './depot.service';

describe('DepotService', () => {
  let service: DepotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepotService],
    }).compile();

    service = module.get<DepotService>(DepotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
