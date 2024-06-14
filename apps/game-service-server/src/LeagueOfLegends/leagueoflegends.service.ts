import { Injectable } from "@nestjs/common";
import { CharacterDto } from "../leagueOfLegends/CharacterDto";

@Injectable()
export class LeagueOfLegendsService {
  constructor() {}
  async GetCharacters(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetLeagueCharacters(args: string): Promise<CharacterDto[]> {
    throw new Error("Not implemented");
  }
}
