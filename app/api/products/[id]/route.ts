import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const product = await prisma.product.delete({
    where: { id: Number(params.id) }
  });
  return NextResponse.json(product, { status: 200 });
}