import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('car')
export class CarController {
  constructor(private readonly appService: AppService) {}
  @Get()
  findAll(): String {
    return this.appService.getCar();
  }

  @Post()
  createCar(): String {
    return 'this is your new car';
  }
}
