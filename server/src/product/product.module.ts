import { Module } from "@nestjs/common";
import { ProductModuleBase } from "./base/product.module.base";
import { ProductService } from "./product.service";

@Module({
  imports: [ProductModuleBase],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
