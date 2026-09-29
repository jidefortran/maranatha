import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LegacyServiceDetails() {
  const router = useRouter();
  useEffect(() => { router.replace('/services/'); }, [router]);
  return null;
}
