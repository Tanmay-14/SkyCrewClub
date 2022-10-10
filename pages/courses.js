import { getSession, signOut } from "next-auth/react";

function courses({user}) {
  return (
    <div>
      <h1>This is courses</h1>
      welcoem user  {user.address}
    </div>
  );
}
export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    // redirect if not authenticated
    if (!session) {
      return {
        redirect: {
          destination: "/signin",
          permanent: false
        }
      };
    }
  
    return {
      props: { user: session.user }
    };
  }
export default courses;
