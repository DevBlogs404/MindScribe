import SideBar from "./components/SideBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={` font-body grid grid-cols-[300px_1fr] h-screen max-h-screen`}
    >
      <SideBar />
      <div>{children}</div>
    </div>
  );
}
