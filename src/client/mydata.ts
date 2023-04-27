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

export const getMySupportList = async (accessToken: string) => {
  const supportlist = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/support`, {
    headers: {
        withCredentials: true,
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    }
  })
  return supportlist.json();
}

export const getMylikeApi = async (accessToken: string) => {
  const likelist = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/like`, {
    headers: {
      withCredentials: true,
    "Content-Type": "application/json",
    Authorization: `${accessToken}`,
  }
  })
  return likelist.json()
}

export const getMyWriteList = async (userId: number, accessToken: string) => {
  const writelist = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?user=${userId}`, {
    headers: {
      withCredentials: true,
    "Content-Type": "application/json",
    Authorization: `${accessToken}`,
  }
  })
  return writelist.json();
}

export const putPostEnd = async (id: number, accessToken: string) => {
  const postexpire = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/end/${id}`, {
    method: "PUT",
    headers: {
      withCredentials: true,
    "Content-Type": "application/json",
    Authorization: `${accessToken}`,
  }
  })

  return postexpire.json()
}

export const extendSponsor = async (id:number, accessToken:string) => {
  const extend = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/support/extend`, {
    method: "POST",
    headers: {
      withCredentials: true,
    "Content-Type": "application/json",
    Authorization: `${accessToken}`,
  },
  body : JSON.stringify({
    postId: `${id}`
  }) 
  }, )

  return extend.json()
}