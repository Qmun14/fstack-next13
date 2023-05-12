import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyJwt } from '@/lib/jwt';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: number } }) {
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({
      error: "unauthorized",
    }),
      {
        status: 401,
      },
    );
  }
  const userPosts = await prisma.post.findMany({
    where: { authorId: +params.id },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });

  return NextResponse.json(userPosts, { status: 200 });
}