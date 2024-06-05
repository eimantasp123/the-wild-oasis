import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hheqkkhhkntjwsefrqny.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZXFra2hoa250andzZWZycW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMjc1MTYsImV4cCI6MjAzMjkwMzUxNn0.c22GbBd_boRqHjW0vg_1XjP1etVRDTTlCHoEkCu0-0s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
