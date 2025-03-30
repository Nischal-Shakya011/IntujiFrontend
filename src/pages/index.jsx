import Image from "next/image";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div class="dashboard">
      <SideBar />
      <MainContent />
      {/* <!-- Right Sidebar (Widgets) --> */}
      <aside class="right-sidebar">
        <div class="saving-plan">
          <h3>Saving Plan</h3>
          <p>Bali Vacation: $1950 / $4000</p>
          <p>New Gadget: $790 / $1000</p>
          <p>Charity: $32,111 / $100</p>
        </div>
        <div class="recent-transactions">
          <h3>Recent Transactions</h3>
          <p>Figma - $100</p>
          <p>Youtube - $120</p>
          <p>Spotify - $15</p>
        </div>
      </aside>
    </div>
  );
}
