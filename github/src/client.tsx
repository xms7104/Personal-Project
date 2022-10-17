import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vrvjjfxgpcqpxithwasg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydmpqZnhncGNxcHhpdGh3YXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM1NTk4ODIsImV4cCI6MTk3OTEzNTg4Mn0.squ9FLIwz694AzJsAD9WORY8e8_CUjQ8rZVlYmLDIEI"
);

export { supabase };
