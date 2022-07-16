import { createContext, useState } from "react";
import { AuthContextType, AuthProviderProps } from "../types";

const defaultUser = { username: "", accessToken: "" };

const defaultValue = {
  user: defaultUser,
  login: (user: any) => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(
  defaultValue as AuthContextType
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(defaultUser);

  const login = (user: any) => setUser(user);
  const logout = () => setUser(defaultUser);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
