const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function fetchChatHistory(): Promise<Message[]> {
  const res = await fetch(`${API_BASE}/history`);
  if (!res.ok) throw new Error("Failed to fetch history");
  const data = await res.json();
  // Convert to Message[] (backend returns role as string, we can cast)
  return data.map((msg: any) => ({
    role: msg.role,
    content: msg.content,
    timestamp: msg.timestamp,
  }));
}

export async function* streamChatResponse(
  message: string,
): AsyncGenerator<string> {
  const response = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Chat error: ${error}`);
  }

  const reader = response.body?.getReader();
  if (!reader) throw new Error("No response body");

  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    yield decoder.decode(value);
  }
}
