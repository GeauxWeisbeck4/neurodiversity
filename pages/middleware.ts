// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.headers.get("Host") == "notocd.com") {
    return new NextResponse(null, {
      status: 301,
      headers: {
        Location: `https://neurodiversity.wiki/ocd?utm_source=notocd.com`,
      },
    });
  }

  return NextResponse.next();
}
