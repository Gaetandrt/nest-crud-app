import { createClient, SupabaseClient } from '@supabase/supabase-js';

export class SupabaseService {
    private supabase: SupabaseClient;

    constructor() {
      this.supabase = createClient(process.env.API_URL, process.env.ANON_KEY);
    }

    async signIn(email: string, password: string) {
      return await this.supabase.auth.signInWithPassword({ email, password });
    }
}

