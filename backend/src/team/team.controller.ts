/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req  } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { AuthGuard } from '../auth/auth.guard';
import { SimpleTeam } from './team.interface';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @UseGuards(AuthGuard) 
  @Get('my-teams')
  getMyTeams(@Req() req: Request) {
    const user = (req as any).user;
    return this.teamService.getTeamsByCoach(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }

  @Post(':teamId/invite/:username')
  inviteContestant(
    @Param('teamId') teamId: string,
    @Param('username') username: string
  ) {
    return this.teamService.inviteContestant(+teamId, username);
  }

  @Get(':getTeamsBelong/:id')
  getTeamsBelongTo(@Param('id') id: string): Promise<SimpleTeam[]>{
    return this.teamService.getTeamsBelongTo(+id);
  }

}
