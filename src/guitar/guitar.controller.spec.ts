import { Test, TestingModule } from '@nestjs/testing';
import { GuitarController } from './guitar.controller';

describe('GuitarController', () => {
  let controller: GuitarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuitarController],
    }).compile();

    controller = module.get<GuitarController>(GuitarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
