import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodService {
  createEntry(quantity: number) {
    return {
      quantity,
    };
  }
}
