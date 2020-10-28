import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByName(username);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async register(user: UserDto) {
    let status = {
      success: true,
      message: 'user registered'
    };
    try {
      await this.userService.register(user);
    } catch (err) {
      status = { success: false, message: err };
    }
    return status;
  }
}
