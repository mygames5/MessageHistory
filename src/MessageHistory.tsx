import './MessageHistory.css';
import type { Message } from './types';
import MessageItem from './MessageItem';

interface MessageHistoryProps {
  list?: Message[];
}

// Основной компонент истории чата
export default function MessageHistory({ list = [] }: MessageHistoryProps) {
  if (list.length === 0) return null;

  return (
    <div className="chat-history">
      {list.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}
