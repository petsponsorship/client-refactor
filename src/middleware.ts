import { log } from "console";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";




const FALLBACK_URL =""
//로그인하지 않은 사용자가 withAuthList(["/mypage", "/write"]) 중 한 페이지에 접근하려고 하면,
// req객체 중, nexturl 안에 pathname을 쿼리스트링으로 붙여서 로그인 페이지로 리다이렉트 시켜줌 
const withAuth = async (req: NextRequest, token: boolean) =>{
    const url = req.nextUrl.clone();
    const {pathname} = req.nextUrl;

    if(!token) {
        //토큰값이 falsy한 사용자가 withAuth페이지에 진입하려하면,(로그인되지 않은 사용자가)
        //미들웨어에서 req객체 중에 NextUrl 안에 담긴 pathname을 쿼리스트링을 붙여서 로그인페이지로 리다이렉트 시킴
        url.pathname = '/login';
        //로그인하면 이전페이지로 이동하기 위해서 쿼리스트링사용하여 붙여줌. 
        url.search =`callbackUrl=${pathname}`;

        return NextResponse.redirect(url)
    }
}

const withOutAuth = async (req:NextRequest, token: boolean, to: string) => {

    const url = req.nextUrl.clone();
    const {pathname} = req.nextUrl;

    if(token) {
        url.pathname= to ?? to;
        url.search = "";

        return NextResponse.redirect(url)
    }
}


const withAuthList =["/mypage", "/write"] //로그인했을 때 진입가능
const withOutAuthList =  ["/login", "/signup"] //로그인 하면 진입 불가능 

export default async function middleware(req: NextRequest) {

    //미들웨어 쿠키
    let cookie = req.cookies.get("Authroization")?.value || ""


    //setting Headers
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("Authroization", cookie);




    const {searchParams} = req.nextUrl;
    const callbackUrl = searchParams.get("callbackUrl")
    const pathname = req.nextUrl.pathname

    const isWithAuth = withAuthList.includes(pathname);
    const isWithOutAuth = withOutAuthList.includes(pathname);

    if(isWithAuth) return withAuth(req, !!cookie)
    if(isWithOutAuth) return withOutAuth(req, !!cookie, callbackUrl??"")

  }
  
  // 미들웨어가 실행될 특정 pathname을 지정하면, 해당 pathname에서만 실행 가능 
  export const config = {
      mathcher : [...withAuthList, ...withOutAuthList]
  }