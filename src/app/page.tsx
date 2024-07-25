import SlothSection from "@/components/SlothSection/SlothSection";
import FlashSection from "@/components/FlashSection/FlashSection";
import StickyNavbar from "@/components/StickyNavbar/StickyNavbar";
import ScrollUp from "@/components/ScrollUp";
import WhiteSection from "@/components/WhiteSection";

export default function Home() {
  return (
    <main>
      <SlothSection />
      <FlashSection />
      <WhiteSection />
      <StickyNavbar />
      <ScrollUp />
    </main>
  );
}
