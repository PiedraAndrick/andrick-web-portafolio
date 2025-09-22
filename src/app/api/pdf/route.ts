import { NextResponse } from "next/server";

export async function GET() {
  const fileId = "1hA77oTU8uMEzGsdXk7i-FoGtUshVs-Fn";
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return new NextResponse("No se pudo descargar", { status: 500 });

  const blob = await res.arrayBuffer();
  return new NextResponse(blob, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="resume_PiedraAndrick.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
