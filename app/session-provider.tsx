'use client';

import type { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';

export const SessionProvider = ({
  session,
  children
}: {
  session: Session | null
  children: React.ReactNode
}) => {
  return (
    <Provider session={session}>
      <>{children}</>
    </Provider>
  );
}
