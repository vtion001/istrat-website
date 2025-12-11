import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url") || ""
  if (!url) return NextResponse.json({ error: "missing url" }, { status: 400 })
  const isYt = /youtu\.be|youtube\.com/.test(url)
  if (!isYt) return NextResponse.json({ error: "unsupported url" }, { status: 400 })
  try {
    const res = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "accept-language": "en-US,en;q=0.9",
      },
      next: { revalidate: 60 * 60 },
    })
    const html = await res.text()
    const ogMatch = /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["'][^>]*>/i.exec(html)
    const nameMatch = /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i.exec(html)
    const raw = ogMatch?.[1] || nameMatch?.[1] || ""
    const desc = raw.replaceAll(/\s+/g, " ").trim().slice(0, 300)
    return NextResponse.json({ desc })
  } catch {
    return NextResponse.json({ error: "fetch_failed" }, { status: 500 })
  }
}
