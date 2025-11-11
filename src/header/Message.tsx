import { m } from "framer-motion";
import React from "react";

export const Message = React.memo(({ text, index }: { text: string; index: number }) => (
  <m.p
    key={index}
    className="italic text-sm sm:text-base text-center max-w-50 sm:max-w-xs"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 1 }}
  >
    {text}
  </m.p>
));
