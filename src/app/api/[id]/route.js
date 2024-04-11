import { NextResponse } from "next/server"
import connectToDatabase from "@/app/lib/connection"
import ProduectData from "../../model/productData"
import { writeFile, unlink } from 'fs/promises'

export const GET = async (req, { params }) => {
    const { id } = params
    await connectToDatabase()
    const data = await ProduectData.findOne({ _id: id });
    return NextResponse.json(data, { status: 200 })
}

export const PUT = async (req, { params }) => {
    const { id } = params
    const imageUpdate = req.nextUrl.searchParams.get("imageUpdate");
    let image = req.nextUrl.searchParams.get("image");
    let desc = req.nextUrl.searchParams.get("desc");
    let price = req.nextUrl.searchParams.get("price");
    if (imageUpdate == "true") {
        const data = await req.formData();
        const file = data.get('file');
        const desc = data.get('desc');
        const price = data.get('price');
        image = file.name;
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/img/${file.name}`;
        await writeFile(path, buffer);
        await connectToDatabase()
        const res = await ProduectData.findByIdAndUpdate(id, { image, desc, price });
        const imageName = res.image;
        const imagePath = `./public/img/${imageName}`;
        await unlink(imagePath);
    } else {
        await connectToDatabase()
        const res = await ProduectData.findByIdAndUpdate(id, { image, desc, price });
    }
    return NextResponse.json({ "msg": "data updated" }, { status: 200 })
}