import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export function GET(request: NextRequest) {
    return NextResponse.json([
        {}
    ])
}

