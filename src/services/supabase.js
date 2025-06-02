import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://aaytoakoexofkkutzmul.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFheXRvYWtvZXhvZmtrdXR6bXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NjQ4NDgsImV4cCI6MjA2NDQ0MDg0OH0.5oFi7CwJcbRciIHD4zJCRrKxCIv-rB8lvMmO4n4oy8I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
