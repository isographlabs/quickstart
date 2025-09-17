import HomePageRoute from '@/components/HomePageRoute';
import { useEffect, useState } from 'react';

export default function Home() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return state && <HomePageRoute />;
}
