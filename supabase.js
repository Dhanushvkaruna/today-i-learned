import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yrpdejuwdcedjwftrznv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlycGRlanV3ZGNlZGp3ZnRyem52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5NjAxODYsImV4cCI6MjAxMzUzNjE4Nn0.i1CdAdT1T__7C2JQPyZP18KpJkjCJjM9ZPyYv3KVOcI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
