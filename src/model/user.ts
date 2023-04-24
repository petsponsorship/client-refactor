export type User = {
    name: string;
    email: string;
    image: undefined | string;
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