import { Controller, HttpStatus, Post, Request, UseGuards, Body, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../dto/user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Response() res, @Body() userDto: UserDto) {
    const result = await this.authService.register(userDto);
    if (!result.success) {
      return res.status(HttpStatus.BAD_REQUEST).send(result);
    }
    return res.status(HttpStatus.OK).send(result);
  }

  @ApiBearerAuth('local')
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ required: true, type: UserDto })
  @ApiOkResponse({ description: 'result Token' })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
