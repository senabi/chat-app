export default function ChatMessage({ id = null, text = null }) {
  return <li key={id}>{text}</li>;
}
