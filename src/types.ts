export interface MessageAuthor {
  name: string;
}

export type MessageType = 'message' | 'response' | 'typing';

export interface Message {
  id: string;
  from: MessageAuthor;
  type: MessageType;
  time: string;
  text?: string;
  }