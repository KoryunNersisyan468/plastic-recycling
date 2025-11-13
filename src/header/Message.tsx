import { m } from "framer-motion";
import React from "react"
interface MessageProps {
  message: { text: string; icon: React.ReactNode };
  index: number;
}

export const Message: React.FC<MessageProps> = React.memo(({ message, index }) => (
  <m.div
    key={index}
    className="flex items-center gap-2 italic text-sm sm:text-base text-center max-w-50 sm:max-w-xs"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 1 }}
  >
    {message.icon}
    <span>{message.text}</span>
  </m.div>
));
