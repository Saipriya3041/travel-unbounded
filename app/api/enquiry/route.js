import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Enquiry from "../../../models/Enquiry";


export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const enquiry = new Enquiry(data);
    await enquiry.save();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
