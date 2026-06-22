import MessageHistory from './MessageHistory';
import { messages } from './Listing'; // bмпортируем массив из созданного файла

export default function App() {
  return (
    <div className="chat-container">
      <MessageHistory list={messages} />
    </div>
  );
}