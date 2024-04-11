import connectToDatabase from "../../lib/connection";
import ProductData from "../../model/productData";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    await connectToDatabase()
    const result = await ProductData.find().limit(6);
    return NextResponse.json(result, { status: 200 })
}
