export async function POST() {
  return Response.json(
    {
      error:
        "Der E-Mail-Service ist noch nicht eingerichtet. Bitte kontaktieren Sie uns per E-Mail.",
    },
    { status: 503 }
  );
}