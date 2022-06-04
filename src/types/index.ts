export type HeaderProps = {
  name?: string;
  imgUrl?: string;
};

export type UserImgProps = {
  src?: string;
};

export type PProps = {
  textAlign?: string;
};

export type ProfileContentProps = {
  src?: string;
  photo?: boolean;
  editing?: boolean;
};

export type SelectionProps = {
  logout?: boolean;
};

export type ButtonProps = {
  mt?: string;
  mb?: string;
};

export type SubTitleProps = {
  mt?: string;
  mb?: string;
  fontSize?: string;
  textAlign?: string;
};

export type TitleProps = {
  mt?: string;
  mb?: string;
  fontSize?: string;
  textAlign?: string;
};

export type User = {
  username: string;
  authType?: "local" | "google" | "facebook" | "twitter" | "github";
  email?: string;
  bio?: string;
  phone?: string;
  photoUrl?: string;
  accessToken: string;
  fullName?: string;
};

export type AuthContextType = {
  user: User;
  login: (user: any) => void;
  logout: () => void;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type UserDataType = {
  id?: string;
  username: string;
  authType?: "local" | "google" | "facebook" | "twitter" | "github";
  email?: string;
  bio?: string;
  phone?: string;
  photoUrl?: string;
} | null;
