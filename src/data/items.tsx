import { Leaf, Repeat, Zap, Globe } from "lucide-react";
import type { JSX } from "react";

export const items: { text: string; icon: JSX.Element }[] = [
  { text: "Պակաս աղբ բնության մեջ", icon: <Leaf size={24} color="#16a34a" /> },
  { text: "Նոր օգտակար արտադրանքներ", icon: <Repeat size={24} color="#0ea5a4" /> },
  { text: "Էներգիայի խնայողություն", icon: <Zap size={24} color="#facc15" /> },
  { text: "Մաքուր միջավայր և առողջություն", icon: <Globe size={24} color="#3b82f6" /> },
];
