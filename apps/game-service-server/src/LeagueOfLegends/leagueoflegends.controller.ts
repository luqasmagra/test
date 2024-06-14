import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LeagueOfLegendsService } from "./leagueoflegends.service";
import { CharacterDto } from "../leagueOfLegends/CharacterDto";

@swagger.ApiTags("leagueOfLegends")
@common.Controller("leagueOfLegends")
export class LeagueOfLegendsController {
  constructor(protected readonly service: LeagueOfLegendsService) {}

  @common.Get("/:id/get-characters")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetCharacters(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetCharacters(body);
      }

  @common.Get("/characters")
  @swagger.ApiOkResponse({
    type: CharacterDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetLeagueCharacters(
    @common.Body()
    body: string
  ): Promise<CharacterDto[]> {
        return this.service.GetLeagueCharacters(body);
      }
}
