import LoginForm from "@/components/view/LoginForm";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function Login({ searchParams: { callbackUrl } }: Props) {
  return (
    <>
      <LoginForm />
    </>
  );
}
