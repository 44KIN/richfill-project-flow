import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Project Manager",
    lastMessage: "The design phase is now complete. Moving to development.",
    time: "2h ago",
    unread: 2,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Developer",
    lastMessage: "I've uploaded the latest build to the testing environment.",
    time: "5h ago",
    unread: 0,
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Designer",
    lastMessage: "Here are the final mockups for your review.",
    time: "1d ago",
    unread: 1,
  },
];

const messages = [
  {
    id: 1,
    sender: "Sarah Mitchell",
    content: "Hi John! I wanted to update you on the e-commerce redesign project.",
    time: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Great! How's the progress looking?",
    time: "10:32 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Sarah Mitchell",
    content: "The design phase is now complete. Moving to development. We're on track for the December 20th deadline.",
    time: "10:35 AM",
    isOwn: false,
  },
];

const Messages = () => {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-12rem)]">
        <Card className="h-full border-border bg-card">
          <div className="grid h-full lg:grid-cols-3">
            <div className="border-r border-border overflow-y-auto">
              <div className="p-4 border-b border-border">
                <h2 className="text-xl font-semibold text-card-foreground">Messages</h2>
              </div>
              <div className="divide-y divide-border">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    className="w-full p-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-card-foreground truncate">{conv.name}</p>
                        <p className="text-xs text-muted-foreground">{conv.role}</p>
                      </div>
                      {conv.unread > 0 && (
                        <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-xs font-semibold text-accent-foreground">{conv.unread}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col h-full">
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="font-semibold text-accent-foreground">SM</span>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Sarah Mitchell</p>
                    <p className="text-xs text-muted-foreground">Project Manager</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        message.isOwn
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-card-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    className="flex-1 bg-background border-input"
                  />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary-light">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
