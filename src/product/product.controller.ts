import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Product } from './product';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dtos/CreateProductDto';

@Crud({
  model: {
    type: Product,
  },
  dto: {
    create: CreateProductDTO,
  }
})
@Controller('product')
export class ProductController {
  constructor(public service: ProductService) { }
}
