import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {

  const body: User = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10)
    },
  });

  const { password, ...result } = user;
  return NextResponse.json(result, { status: 201 });

}