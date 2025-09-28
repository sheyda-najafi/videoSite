'use client';

import { routing } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RootNotFoundClient() {
  const pathname = usePathname();
  const [messages, setMessages] = useState<{ NotFoundPage?: { title: string } }>({});

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    const supportedLocales = routing?.locales;
    const locale = segments[0] && supportedLocales.includes(segments[0]) ? segments[0] : 'en';

    import(`@/messages/${locale}/common.json`).then((mod) => setMessages(mod.default));
  }, [pathname]);

  return <h1>{messages.NotFoundPage?.title}</h1>;
}
