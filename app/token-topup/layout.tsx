import SideBar from "../post/components/SideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} grid grid-cols-[300px_1fr] h-screen max-h-screen`}
    >
      {/* sidebar */}
      <SideBar />
      {/* sidebar */}

      <div>{children}</div>
    </div>
  );
}
