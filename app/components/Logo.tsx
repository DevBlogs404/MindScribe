import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export default function Logo() {
  return (
    <div
      className={`${dmSerifDisplay.className} flex items-center justify-center py-4 text-center text-3xl font-heading`}
    >
      MindScribe
      <FontAwesomeIcon icon={faBrain} className="text-slate-300 w-8 h-8 ml-2" />
    </div>
  );
}
