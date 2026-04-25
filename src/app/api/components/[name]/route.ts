import { NextResponse } from "next/server";
import { fetchComponent } from "@/services/component-service";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  console.log("Fetching component:", name);
  const result = await fetchComponent(name);

  if (result.error) {
    return NextResponse.json(
      { error: result.error },
      { status: result.status },
    );
  }

  return NextResponse.json(result.data);
}
