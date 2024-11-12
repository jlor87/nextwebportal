// src/app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    if (username === 'admin' && password === 'password') {
        return NextResponse.json({ message: 'Login successful', token: 'mock-token' });
    } else {
        return NextResponse.json({ message: 'Invalid credentials! Please try again.' }, { status: 401 });
    }
}
