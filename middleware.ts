
export function middleware(req: Request) {
  const apiKey = process.env.API_KEY; // ✅ kukunin niya sa .env
  console.log("API Key:", apiKey);

  // sample logic
  if (!apiKey) {
    console.error("Missing API key!");
  }

  return new Response("Middleware running successfully!");
 // src/middleware.ts

export function middleware(request: Request) {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    // nagpapakita sa terminal lang na wala
    console.error("❌ API_KEY is missing from .env");
  } else {
    // nagpapakita sa terminal lang na present - hindi ipinapakita ang buong value
    console.log("✅ API_KEY found in environment (length):", apiKey.length);
  }

  return new Response("Middleware running successfully!");
}
~

}
