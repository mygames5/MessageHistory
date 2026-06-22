import type { Message, MessageType } from './types';

function getMessageClass(type: MessageType): string {
  if (type === 'message') return 'message-item message-own';
  if (type === 'response') return 'message-item message-response';
  if (type === 'typing') return 'message-item message-typing';
  return 'message-item';
}

export default function MessageItem({ message }: { message: Message }) {
  const { from, type, time, text } = message;

  return (
    <div className={getMessageClass(type)}>
      {type === 'typing' ? (
        <div className="typing-indicator">
          <span>печатает...</span>
          <div className="typing-dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      ) : (
        <div className="message-bubble">{text}</div>
      )}
      <div className="message-header">
        <span className="message-author">{from.name}</span>
        <span className="message-time">{time}</span>
      </div>
    </div>
  );
}