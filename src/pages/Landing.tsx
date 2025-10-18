import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bot, Zap, Shield, Sparkles } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-primary">
              <Bot className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              AI Chatbot Agent
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Platform AI Agent yang powerful dengan webhook integration. 
              Otomatisasi workflow Anda dengan kecerdasan buatan.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-6 rounded-2xl space-y-3 hover:glow-primary transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Real-time Response</h3>
              <p className="text-sm text-muted-foreground">
                Dapatkan respons instan dari AI agent dengan approval workflow
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3 hover:glow-secondary transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">
                Data Anda terenkripsi dengan authentication yang aman
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3 hover:glow-primary transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">AI Powered</h3>
              <p className="text-sm text-muted-foreground">
                Didukung oleh Gemini AI untuk intelligent conversation
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg glow-primary transition-all hover:scale-105"
            >
              Mulai Sekarang
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/auth")}
              className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg transition-all hover:scale-105"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-muted-foreground">
        <p>© 2025 AI Chatbot Agent. Powered by Lovable Cloud</p>
      </footer>
    </div>
  );
};

export default Landing;
