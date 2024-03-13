import { IsOptional, IsString, MinLength, ValidateIf } from 'class-validator';

export class SignInAgentDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsString()
  @MinLength(8)
  password: string;

  @ValidateIf((o) => !o.username && !o.email) // Validate if both username and email are empty
  get hasAtLeastOneField() {
    return 'At least one of username or email is required';
  }

  // Alternatively, use a validation group for username/email
  // @IsOneOf(['username', 'email'], { message: 'Please provide username or email' })
  // usernameOrEmail: string;
}
