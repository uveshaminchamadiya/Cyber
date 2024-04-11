import { NextResponse } from "next/server"
import connectToDatabase from "../../../lib/connection"
import User from "../../../model/User";

export const GET = async (req, { params }) => {
    const { email } = params
    await connectToDatabase()
    const user = await User.findOne({ email : email });
    return NextResponse.json(user, { status: 200 })
}

