import { getAuth } from "firebase/auth";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Form, useFetcher, useLocation, useSearchParams } from "remix";
import { LogoutForm } from "~/components/LogoutForm";
import { addAppUser } from "~/db/appUsers/appUsers.client";
import type { AuthUser } from "~/utils/session.server";

export const AuthContext = createContext<AuthUser | null>(null);

export function AuthProvider({
  children,
  user: userProp,
  userToken: userTokenProp,
}: {
  children: React.ReactNode;
  user: AuthUser | null;
  userToken: string | null;
}) {
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<AuthUser | null>(userProp);
  const logoutFormRef = useRef<HTMLFormElement>(null);
  const [userToken, setUserToken] = useState<string>(userTokenProp || "");
  const userTokenForm = useRef<HTMLFormElement | null>(null);
  const fetcher = useFetcher();

  useEffect(() => {
    setUser(userProp);
  }, [userProp]);

  const { pathname } = useLocation();
  const redirectTo = pathname.includes("/sign/") ? "/floor-plans" : pathname;

  function sendUserToken() {
    if (!userTokenForm.current) return;
    const formData = new FormData(userTokenForm.current);
    fetcher.submit(formData, {method: "post", action:"/update-session"})
  }

  // listen for token changes
  // call setUser and write new token as a cookie
  useEffect(() => {
    const auth = getAuth();
    return auth.onIdTokenChanged(async (userFromChange) => {
      if (userFromChange === null && user !== null) {
        setUser(null);
        if (!logoutFormRef.current) return;
        logoutFormRef.current.submit();
      } else if (userFromChange) {
        const token = await userFromChange.getIdToken();
        if (token !== userToken) {
          setUser(userFromChange);
          setUserToken(token);
          await addAppUser(userFromChange.uid);
          sendUserToken();
        }
      }
    });
  }, [user]);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  

  return (
    <AuthContext.Provider value={user}>
      <LogoutForm ref={logoutFormRef} />
      <Form method="post" ref={userTokenForm} action="/update-session">
        <input type="hidden" name="_method" value="put" />
        <input type="hidden" name="userToken" value={userToken} />
        <input
          type="hidden"
          name="redirectTo"
          value={searchParams.get("redirectTo") ?? redirectTo}
        />
      </Form>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
