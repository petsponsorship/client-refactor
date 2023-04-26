export type User = {
    name: string;
    email: string;
    image?: undefined | string;
  };
  export type Session = {
    user: User;
    Authorization: string;
    RefreshToken: string;
  };
  
  export type UserData = {
    userNmae: string;
    supportCnt: number;
    postCnt: number;
    likeCnt: number;
    supportTotalAmount: number;
  };

  export type UserSession = {
    data: {
      Authorization: string;
      RefreshToken: string;
      expires: string;
      user: User;
    }
    status: string;
    update: void
  }