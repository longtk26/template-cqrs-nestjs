import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserRequestDto {
  @ApiProperty({
    description: 'Name of the user',
    example: 'John Doe',
    type: String,
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  name: string | null;

  @ApiProperty({
    description: 'Email of the user',
    example: 'john.doe@example.com',
    type: String,
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password of the user',
    example: 'password123',
    type: String,
    required: true,
  })
  @IsStrongPassword()
  password: string;
}

export class CreateUserResponseDto {
  @ApiProperty({
    description: 'ID of the created user',
    example: '123e4567-e89b-12d3-a456-426614174000',
    type: String,
    required: true,
  })
  id: string;
}
