import { headers,cookies} from "next/headers"
import { type NextRequest } from "next/server"


export async function GET(request:NextRequest){
    const requestHeader = new Headers(request.headers)
    // there is already a inbuilt function for that
    const headerbynext = headers();
    cookies().set("resultperpage","20");
    const theme = request.cookies.get("theme")
    console.log(requestHeader.get("Authorization"))
    console.log(headerbynext.get("Authorization"))
    console.log(theme)
    console.log(cookies().get("resultperpage"))
    return new Response("<h1>profile api</h1>",{
        headers:{
            "Content-type":"text/html",
            "Set-cookie":"theme-dark",
        }
    })
}