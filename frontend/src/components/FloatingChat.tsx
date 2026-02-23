import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Loader2, MessageCircle, Send, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FloatingChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const predefinedQuestions = [
    "Who is Aditya Kumar?",
    "What skills and technologies do you work with?",
    "Tell me about your best projects",
    "What experience do you have?",
    "How can I contact you?",
    "Are you open for internships or jobs?",
  ];

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Send message
  const sendMessageWithText = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setShowSuggestions(false);

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      let assistantText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        try {
          const json = JSON.parse(chunk);
          assistantText += json.answer;
        } catch {}

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantText,
          };
          return updated;
        });
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (question: string) => {
    setInput(question);
    setShowSuggestions(false);

    setTimeout(() => {
      sendMessageWithText(question);
    }, 100);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 
                     px-4 py-3 rounded-full bg-blue-500 text-white shadow-lg
                     animate-pulse border-2 border-blue-300"
        >
          <MessageCircle />
          Chat
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[500px]
                     bg-white rounded-2xl shadow-xl border flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="font-semibold text-gray-800">AI Assistant</h2>
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-3">
            {(
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500 mb-2">You can ask me:</p>

                {predefinedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestionClick(q)}
                    className="text-left px-3 py-2 border rounded-lg hover:bg-blue-50 
                   text-blue-600 text-sm transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[85%] text-sm whitespace-pre-wrap
                ${
                  msg.role === "user"
                    ? "ml-auto min-w-10px bg-blue-500 text-white"
                    : "mr-auto bg-gray-100 text-gray-800"
                }`}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}

            {loading && (
              <div className="mr-auto bg-gray-100 text-gray-800 p-3 rounded-xl flex items-center gap-2">
                <Loader2 className="animate-spin" size={18} />
                Thinking...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3 ">
            <textarea
              rows={2}
              placeholder="Type your message..."
              value={input}
              name="message"
              id="message"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' ? sendMessageWithText(input) : ''}
              className="w-full resize-none border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => sendMessageWithText(input)}
              disabled={loading}
              className="mt-2 w-full flex justify-center items-center gap-2
                         bg-blue-500 text-white py-2 rounded-lg
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                <p className="flex gap-1 items-center">
                  Send <Send size={18} />
                </p>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;
