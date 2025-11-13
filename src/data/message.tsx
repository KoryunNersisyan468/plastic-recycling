import React from "react";
import { Globe, Leaf, Repeat, Droplet, Sprout } from "lucide-react";

export const messages: { text: string; icon: React.ReactNode }[] = [
  {
    text: "Մաքուր մոլորակ՝ մաքուր ապագա",
    icon: <Globe size={24} color="#0ea5a4" />,
  },
  { text: "Վերամշակիր, մի՛ նետիր", icon: <Repeat size={24} color="#16a34a" /> },
  {
    text: "Պահպանիր բնությունը՝ այսօր և միշտ",
    icon: <Leaf size={24} color="#22c55e" />,
  },
  { text: "Խնայի՛ր ջուրը", icon: <Droplet size={24} color="#3b82f6" /> },
  { text: "Տնկիր նոր բույսեր", icon: <Sprout size={24} color="#16a34a" /> },
];
