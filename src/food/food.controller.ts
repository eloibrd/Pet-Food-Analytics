import { Body, Controller, Get, Post } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  // GET /food -> "hello food"
  @Get()
  getFood() {
    return 'hello food test';
  }
  // POST /food/:quantity
  @Post()
  createEntry(@Body('quantity') quantity: number) {
    return this.foodService.createEntry(quantity);
  }
}
