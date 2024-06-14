import { Module } from "@nestjs/common";
import { LeagueOfLegendsService } from "./leagueoflegends.service";
import { LeagueOfLegendsController } from "./leagueoflegends.controller";
import { LeagueOfLegendsResolver } from "./leagueoflegends.resolver";

@Module({
  controllers: [LeagueOfLegendsController],
  providers: [LeagueOfLegendsService, LeagueOfLegendsResolver],
  exports: [LeagueOfLegendsService],
})
export class LeagueOfLegendsModule {}
