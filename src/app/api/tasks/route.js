import { NextResponse } from "next/server";

export const GET = () => {
    return NextResponse.json({
        message: "Obteniendo tareas..."
    })
};

export const POST = () => {

    return NextResponse.json({
        message: "Creando tareas..."
    });

};