'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChatPanel } from './chat-panel';
import { ChatMessages } from './chat-messages';
import { useUIState } from 'ai/rsc';

type ChatProps = {
  id?: string;
  query?: string;
};

export function Chat({ id, query }: ChatProps) {
  const path = usePathname();
  const [messages] = useUIState();

  useEffect(() => {
    if (!path.includes('search') && messages.length === 1) {
      window.history.replaceState({}, '', `/search/${id}`);
    }
  }, [id, path, messages, query]);

  return (
    <div className="px-2 sm:px-4 pt-8 pb-8 max-w-full mx-auto flex flex-col space-y-2 overflow-y-auto">
      <ChatMessages messages={messages} />
      <ChatPanel messages={messages} query={query} />
    </div>
  );
}
