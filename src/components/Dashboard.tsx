import { redirect } from 'react-router';
import { useUser } from '@clerk/clerk-react';

function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  
  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn) return <div>Not signed in</div>;

  return (
    <div className="flex items-center justify-center">
      <h1 className="">Welcome, {user.firstName ?? user.username ?? user.primaryEmailAddress?.emailAddress}</h1>
    </div>
  )
}

export default Dashboard;
