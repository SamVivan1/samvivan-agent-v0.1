import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { WorkflowButtons } from "@/components/WorkflowButtons";
import { TypingIndicator } from "@/components/TypingIndicator";
import { toast } from "@/hooks/use-toast";
import { Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  needApproval?: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Halo! Saya adalah AI Agent Anda. Ada yang bisa saya bantu?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendToWebhook = async (payload: object) => {
    const token = import.meta.env.VITE_WEBHOOK_JWT_TOKEN;
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (token) headers["Authorization"] = `Bearer ${token}`;

    const response = await fetch(
      "https://n8n.samvivan.my.id/webhook/13951f35-791b-4364-b6a5-a66307eb402c",
      {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  };

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const data = await sendToWebhook({
        message: text,
        source: "lovable-ui",
      });

      // ✅ Parsing struktur dari n8n
      const output = data?.[0]?.output || {};
      const botText =
        output?.message || "Maaf, saya tidak bisa memproses pesan Anda.";
      const needApproval =
        output?.needApproval && output.needApproval.toLowerCase() === "true";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isUser: false,
        timestamp: new Date(),
        needApproval,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      toast({
        title: "⚠️ Gagal",
        description: "Gagal mengirim pesan ke agent.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleApproval = async (decision: "approved" | "rejected") => {
    setIsTyping(true);

    // tampilkan pesan user
    const approvalMessage: Message = {
      id: Date.now().toString(),
      text:
        decision === "approved"
          ? "✅ Disetujui untuk dilanjutkan."
          : "❌ Ditolak oleh user.",
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, approvalMessage]);

    try {
      const data = await sendToWebhook({
        approval: decision,
        source: "lovable-ui",
      });

      const output = data?.[0]?.output || {};
      const botText = output?.message || "Aksi telah diterima oleh sistem.";

      const botMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: botText,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: "⚠️ Gagal",
        description: "Gagal mengirim keputusan ke agent.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[90vh] flex flex-col gap-4">
        {/* Header */}
        <div className="glass-card rounded-2xl p-4 flex items-center gap-3 glow-primary">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">
              AI Chatbot Agent
            </h1>
            <p className="text-sm text-muted-foreground">
              Powered by N8N Webhook
            </p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="flex-1 glass-card rounded-2xl p-6 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto mb-4 pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            {messages.map((message) => (
              <div key={message.id}>
                <ChatMessage
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />

                {/* Jika butuh approval */}
                {!message.isUser && message.needApproval && (
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleApproval("approved")}
                      className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm transition"
                    >
                      ✅ Approve
                    </button>
                    <button
                      onClick={() => handleApproval("rejected")}
                      className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm transition"
                    >
                      ❌ Reject
                    </button>
                  </div>
                )}
              </div>
            ))}

            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          <div className="space-y-3">
            <WorkflowButtons />
            <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
