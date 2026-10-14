export const runtime = "nodejs";
export const revalidate = 3600;

const RESUME_URL =
  "https://raw.githubusercontent.com/AhmadSyukriGozali/Portofolio-Asyukgo.github.io/main/public/resume/CV-Ahmad-Syukri-Gozali.pdf";

export async function GET() {
  try {
    const response = await fetch(RESUME_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return new Response("File resume tidak dapat ditemukan.", {
        status: 502,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    const pdf = await response.arrayBuffer();

    return new Response(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV-Ahmad-Syukri-Gozali.pdf"',
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response("Terjadi kesalahan saat mengunduh resume. Silakan coba lagi.", {
      status: 502,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
