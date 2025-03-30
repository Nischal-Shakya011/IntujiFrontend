import Image from "next/image";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div class="dashboard">
      <SideBar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}
