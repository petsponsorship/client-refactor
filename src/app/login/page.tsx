import LoginForm from "@/components/view/LoginForm";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

type Props ={
    searchParams : {
        callbackUrl : string
    }
}

export default async function Login({searchParams: {callbackUrl}}: Props) {
    // const session = await getServerSession(authOptions);

    // if(session) {
    //     redirect("/");
    // }


return (
<>
<LoginForm />
</>
)
}