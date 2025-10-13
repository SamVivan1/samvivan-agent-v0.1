import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Database, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const WorkflowButtons = () => {
  const [absenLoading, setAbsenLoading] = useState(false);
  const [backupLoading, setBackupLoading] = useState(false);

  const triggerAbsen = async () => {
    setAbsenLoading(true);
    try {
      const response = await fetch(
        "https://n8n.samvivan.my.id/webhook/28a15265-0a35-41b8-a33d-d10594d08b60",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            trigger: "manual",
            source: "lovable-ui",
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "✅ Berhasil",
          description: "Absen berhasil dikirim ke sistem.",
        });
      } else {
        throw new Error("Failed to trigger absen");
      }
    } catch (error) {
      toast({
        title: "❌ Gagal",
        description: "Gagal mengirim absen, coba lagi nanti.",
        variant: "destructive",
      });
    } finally {
      setAbsenLoading(false);
    }
  };

  const triggerBackup = async () => {
    setBackupLoading(true);
    try {
      const response = await fetch(
        "https://n8n.samvivan.my.id/webhook/c9281975-90e8-4adf-a6d9-de14ac071abc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            trigger: "manual",
            source: "lovable-ui",
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "✅ Berhasil",
          description: "Backup workflow berhasil dijalankan.",
        });
      } else {
        throw new Error("Failed to trigger backup");
      }
    } catch (error) {
      toast({
        title: "❌ Gagal",
        description: "Gagal menjalankan backup.",
        variant: "destructive",
      });
    } finally {
      setBackupLoading(false);
    }
  };

  return (
    <div className="flex gap-3 w-full">
      <Button
        onClick={triggerAbsen}
        disabled={absenLoading}
        className="flex-1 glass-card hover:bg-card/60 text-foreground border-primary/30 hover:border-primary transition-all h-12"
        variant="outline"
      >
        {absenLoading ? (
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        ) : (
          <CheckCircle className="w-5 h-5 mr-2" />
        )}
        Absen Sekarang
      </Button>

      <Button
        onClick={triggerBackup}
        disabled={backupLoading}
        className="flex-1 glass-card hover:bg-card/60 text-foreground border-secondary/30 hover:border-secondary transition-all h-12"
        variant="outline"
      >
        {backupLoading ? (
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        ) : (
          <Database className="w-5 h-5 mr-2" />
        )}
        Backup Workflow
      </Button>
    </div>
  );
};
