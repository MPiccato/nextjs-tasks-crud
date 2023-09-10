import { NextResponse } from "next/server";

export const GET = (req, { params }) => {
    console.log(params)
    return NextResponse.json({
        message: "Obteniendo tarea..."
    });
};