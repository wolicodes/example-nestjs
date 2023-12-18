import { Module } from "@nestjs/common";
import { CustomerModuleBase } from "./base/customer.module.base";
import { CustomerService } from "./customer.service";

@Module({
  imports: [CustomerModuleBase],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
