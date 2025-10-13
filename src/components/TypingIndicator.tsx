export const TypingIndicator = () => {
  return (
    <div className="flex justify-start w-full mb-4 animate-fade-in">
      <div className="glass-card rounded-2xl px-4 py-3 shadow-lg">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: "200ms" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: "400ms" }}></div>
        </div>
      </div>
    </div>
  );
};
