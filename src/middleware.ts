import { NextResponse,type NextRequest } from "next/server";

//this is CUSTOM MATCHER CONFIG APPROACH

/* export function middleware(request:NextRequest){
 return NextResponse.redirect(new URL("/",request.url))
}
export const config = {
 matcher:"/Profile"
}; */

//THIS IS CONDITIONAL STATEMENT METHOD 

/* export function middleware(request:NextRequest){
if(request.nextUrl.pathname==="/Profile"){
    NextResponse.redirect(new URL("/hello",request.url));
}
} */

//how middleware in cookies and header

/* export function middleware (request:NextRequest) {
    const response = NextResponse.next();
    const themePorvider = request.cookies.get("theme");
    if(!themePorvider){
        response.cookies.set("theme","dark")

    }
    response.headers.set("custome-header","hello-itsme")
} */