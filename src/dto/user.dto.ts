import { ApiProperty } from '@nestjs/swagger';
import { RoleDto } from './role.dto';

export class UserDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly roles: RoleDto[];
}
