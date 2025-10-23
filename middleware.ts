export function middleware(req: Request) {
  const apiKey = process.env.API_KEY; // ✅ kukunin niya sa .env
  console.log("API Key:", apiKey);

  // sample logic
  if (!apiKey) {
    console.error("Missing API key!");
  }

  return new Response("Middleware running successfully!");
}
