import React, { useEffect, useState, FunctionComponent, Fragment } from "react";
import useSyncPokemonData from "hooks/SyncPokemonDataHook";
import { GoogleLogin } from "react-google-login";
import authService from "services/AuthService";
import { IRoute } from "router/config";
import ResponsiveDrawer from "components/navs/ResponsiveDrawer";
import { drawerContext } from "contexts/Drawer.context";
import { useDrawer } from "hooks/DrawerHook";

interface IProps {
  routes: IRoute[];
}

const App: FunctionComponent<IProps> = (props: IProps) => {
  const { routes } = props;
  const drawer = useDrawer();
  const { sync } = useSyncPokemonData();
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    sync();
    // authService.renewToken().then((isSuccess) => {
    //   setAuthenticated(isSuccess);
    // });
  }, [sync]);

  const handleSigninSuccess = async (res: any) => {
    const isSuccess = await authService.signin(res.accessToken);
    setAuthenticated(isSuccess);
  };

  return (
    <drawerContext.Provider value={drawer}>
      <ResponsiveDrawer routes={routes} />
    </drawerContext.Provider>
  );
};

export default App;

{
  /* <div className="App">
{authenticated ? (
  <div>Logged in</div>
) : (
  <GoogleLogin
    clientId="232104767030-07klpmed2b3e588cte839dhqpeieub07.apps.googleusercontent.com"
    cookiePolicy="single_host_origin"
    onSuccess={handleSigninSuccess}
  />
)}
</div> */
}
