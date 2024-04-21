import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    console.log(req.auth)
    if (!req.auth) {
        return NextResponse.rewrite(new URL('/signin', req.url))
    }
})
// See "Matching Paths" below to learn more
export const config = {
    matcher:[ '/batch/:path*','/notes/:path*','/memories/:path*'],
}