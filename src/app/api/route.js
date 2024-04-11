import connectToDatabase from "../lib/connection";
import ProductData from "../model/productData";
import { NextResponse } from "next/server";
import {writeFile, unlink} from 'fs/promises'

export const GET = async (req) => {
    await connectToDatabase()
    const result = await ProductData.find();
    return NextResponse.json(result, { status: 200 })
}

export const POST = async(req) => {
    console.log("post method")
    const data = await req.formData();
    const file = data.get('file');
    const desc = data.get('desc');
    const price = data.get('price');
    const image = file.name;
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/img/${file.name}`;
    await writeFile(path,buffer);
    await connectToDatabase()
    const result = await ProductData.create({image, desc, price});
    return NextResponse.json({"message" : "New Product Added"}, {status : 200})
}

export const DELETE = async (req) => {
    const id = req.nextUrl.searchParams.get("id");
    await connectToDatabase();
    const res = await ProductData.findByIdAndDelete(id)
    const imageName = res.image;
    const imagePath = `./public/img/${imageName}`;
    await unlink(imagePath);
    return NextResponse.json({ "message": "record deleted" }, { status: 200 });
};