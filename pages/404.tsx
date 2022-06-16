import { NextPage } from 'next';
import AccessDenied from '../components/ui/AccessDenied';
import { useSession } from 'next-auth/react';


const AccessDeniedPage: NextPage = () => {
  const { data: session, status } = useSession();

  if (!session) {
    return (<AccessDenied/>);
  }

  return (
    <h1>
      page not found
    </h1>
  );
};

export default AccessDeniedPage;
