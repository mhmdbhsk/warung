import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Category = () => {
  const { pathname, push } = useRouter();

  useEffect(() => {
    if (pathname === '/category') {
      push('/');
    }
  }, []);

  return null;
};

export default Category;
