export const myNumData =async(accessToken: string)=>{
  const data =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my`, {
      method: "GET",
      headers: {
          withCredentials: true,
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      //   RefreshToken : `${refreshToken}`
      },
    });

    return data.json();
}