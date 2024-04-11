import connectToDatabase from "../../lib/connection";
import Cart from "../../model/Cart";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    const record = await req.json();
    const image = record.data.image;
    const desc = record.data.desc;
    const price = record.data.price;
    const username = record.username;
    await connectToDatabase()
    const result = await Cart.create({image, desc, price, username});
    return NextResponse.json({"message" : "Product added to cart"}, {status : 201})
}

export const GET = async (req) => {
    await connectToDatabase()
    const result = await Cart.find();
    return NextResponse.json(result, { status: 200 })
}

export const DELETE = async (req) => {
    const id = req.nextUrl.searchParams.get("id");
    await connectToDatabase();
    await Cart.findByIdAndDelete(id)
    return NextResponse.json({ "message": "product deleted" }, { status: 200 });
};