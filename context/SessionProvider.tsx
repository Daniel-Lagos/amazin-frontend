import {
  createContext, Dispatch, FunctionComponent, ReactNode, SetStateAction,
  useContext, useState
} from 'react';

type RegisteredUserValues = {
  isLogin: boolean,
  setIsLogin: Dispatch<SetStateAction<boolean>>
}

type RegisteredUserProviderProps = {
  children?: ReactNode;
}

const SessionContext = createContext<RegisteredUserValues>({
  isLogin: false,
  setIsLogin: () => {
  }
});

export const useSessionContext = () => {
  return useContext(SessionContext);
};

export const SessionProvider: FunctionComponent<RegisteredUserProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <SessionContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </SessionContext.Provider>
  );
};
