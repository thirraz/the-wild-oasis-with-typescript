import { createClient } from "@supabase/supabase-js"
const supabaseUrl = "https://gbcksxbxabufcuobfztg.supabase.co"
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiY2tzeGJ4YWJ1ZmN1b2JmenRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MTI3OTIsImV4cCI6MjAyNzk4ODc5Mn0.GvGK7Ru87_oLanvc8YhpWXC2DyC9h4ignvCg4Os-QSk"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
