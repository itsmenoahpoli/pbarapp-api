import { Controller, Res, Body, Post, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { LoginDTO, SignupAccountDTO } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth API')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 200,
    description: 'Authenticate credentials success',
  })
  @Post('/login')
  async adminLoginHandler(
    @Body() payload: LoginDTO,
    @Res() response: Response,
  ) {
    const result = await this.authService.login(payload);

    return response.status(HttpStatus.OK).json(result);
  }

  @ApiResponse({
    status: 201,
    description: 'Signup account successful',
  })
  @Post('/account/signup')
  async signupHandler(
    @Body() payload: SignupAccountDTO,
    @Res() response: Response,
  ) {
    const result = await this.authService.signupAccount(payload);

    return response.status(HttpStatus.CREATED).json(result);
  }
}
