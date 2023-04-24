"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

export default function Myprofile({ username }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image className="rounded-full" src={logo} alt="profile image" width={100} height={100} />
        <h4 className="mt-8">{username}님</h4>
      </div>
    </>
  );
}
