import Profilepage from "./profilePage";
import { useMoralis, useMoralisQuery } from "react-moralis";
import JustConnect from "./justConnect";

const Profile = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout
  } = useMoralis();
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Profilepage />
        </div>
      ) : (
        <JustConnect />
      )}
    </div>
  );
};

export default Profile;
