import { createClient } from "@supabase/supabase-js";

import type { Database } from "../database.types";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "../env";

class SupabaseClient {
  supabase: ReturnType<typeof createClient<Database>>;

  constructor(
    url: string = SUPABASE_URL,
    key: string = SUPABASE_PUBLISHABLE_KEY,
  ) {
    this.supabase = createClient(url, key);
  }
}

const supabaseClient = new SupabaseClient();

export default supabaseClient.supabase;