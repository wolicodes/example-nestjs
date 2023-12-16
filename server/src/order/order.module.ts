import { Module } from "@nestjs/common";
import { OrderModuleBase } from "./base/order.module.base";
import { OrderService } from "./order.service";

@Module({
  imports: [OrderModuleBase],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
