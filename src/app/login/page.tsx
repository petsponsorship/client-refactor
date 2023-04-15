import LoginForm from "@/components/view/LoginForm";
import { getProviders, getSession } from "next-auth/react";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function Login({ searchParams: { callbackUrl } }: Props) {
  const session = await getSession();
  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2));
  }
  // const session = await getServerSession(authOptions);

  // if(session) {
  //     redirect("/");
  // }

  return (
    <>
      <LoginForm />
    </>
  );
}
