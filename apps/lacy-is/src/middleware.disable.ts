import { unstable_precompute as precompute } from '@vercel/flags/next';
import { NextResponse, type NextRequest } from 'next/server';
import { precomputeFlags } from '~/feature-flags';

// Note that we're running this middleware for / only, but
// you could extend it to further pages you're experimenting on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export async function middleware(request: NextRequest) {
  // precompute returns a string encoding each flag's returned value
  const code = await precompute(precomputeFlags);

  // rewrites the request to include the precomputed code for this flag combination
  const nextUrl = new URL(
    `/${code}${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url,
  );

  return NextResponse.rewrite(nextUrl, { request });
}