'use server'
import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { ICategory } from 'types/category.interface'

export async function GET() {
	const res = await axios.get<ICategory[]>('http://localhost:4200/api/category')
	return NextResponse.json(res.data)
}