import { Controller, Post, Body } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { SupabaseService } from '../supabase/supabase.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    return this.supabaseService.signIn(signInDto.email, signInDto.password);
  }
}
