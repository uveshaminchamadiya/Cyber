import { NextResponse } from "next/server"
import connectToDatabase from "../../lib/connection"
import User from "../../model/User";

export const POST = async (req) => {
    const newUser = await req.json();
    try {
        await connectToDatabase();
        const result = await User.create(newUser);
        return NextResponse.json({ "msg": "User Created" }, { status: 201 });
    } catch (error) {
        console.error("Error during insertion:", error);
        return NextResponse.json({ "error": error }, { status: 400 });
    }
};