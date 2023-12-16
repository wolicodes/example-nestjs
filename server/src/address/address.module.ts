import { Module } from "@nestjs/common";
import { AddressModuleBase } from "./base/address.module.base";
import { AddressService } from "./address.service";

@Module({
  imports: [AddressModuleBase],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
