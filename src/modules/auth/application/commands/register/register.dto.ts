import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class RegisterRequestDto {
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

export class RegisterResponseDto {
  @ApiProperty({
    description: 'ID of the user',
    example: '123e4567-e89b-12d3-a456-426614174000',
    type: String,
    required: true,
  })
  id: string;

  @ApiProperty({
    description: 'Access token for the user',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    type: String,
    required: true,
  })
  accessToken: string;

  @ApiProperty({
    description: 'Refresh token for the user',
    example: 'dGhpcyBpcyBhIHNhbXBsZSByZWZyZXNoIHRva2Vu...',
    type: String,
    required: true,
  })
  refreshToken: string;
}
