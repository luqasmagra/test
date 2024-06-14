import * as graphql from "@nestjs/graphql";
import { CharacterDto } from "../leagueOfLegends/CharacterDto";
import { LeagueOfLegendsService } from "./leagueoflegends.service";

export class LeagueOfLegendsResolver {
  constructor(protected readonly service: LeagueOfLegendsService) {}

  @graphql.Query(() => String)
  async GetCharacters(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetCharacters(args);
  }

  @graphql.Query(() => [CharacterDto])
  async GetLeagueCharacters(
    @graphql.Args()
    args: string
  ): Promise<CharacterDto[]> {
    return this.service.GetLeagueCharacters(args);
  }
}
