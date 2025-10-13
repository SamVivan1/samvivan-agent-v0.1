import { useState, FormEvent, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-end">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ketik pesan Anda..."
        disabled={disabled}
        className="glass-card min-h-[60px] max-h-[120px] resize-none text-foreground placeholder:text-muted-foreground border-border/50 focus:border-primary focus:ring-primary transition-all"
        rows={1}
      />
      <Button
        type="submit"
        disabled={disabled || !message.trim()}
        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground h-[60px] px-6 glow-primary transition-all hover:scale-105"
      >
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
};
