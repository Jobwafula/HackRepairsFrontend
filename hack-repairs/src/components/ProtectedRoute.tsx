'use client';

import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from './Loading';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      // Simulate a delay to check if the user exists
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!user) {
        router.push('/signin');
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, [user, router]);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
