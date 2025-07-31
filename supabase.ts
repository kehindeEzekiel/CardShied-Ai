import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://haqnntwcmtmcyhncpzru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcW5udHdjbXRtY3lobmNwenJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5OTg1MTAsImV4cCI6MjA2ODU3NDUxMH0.7G274LpLzcS3VVbF-B3U_S4QS8KZ94YdJSTZk7ZB20w';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };