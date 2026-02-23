export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp?: string;
}

export interface ChatHistoryResponse {
  role: string;
  content: string;
  timestamp: string;
}
