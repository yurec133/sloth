"use client";
import SlothSection from "@/components/SlothSection/SlothSection";
import FlashSection from "@/components/FlashSection/FlashSection";
import StickyNavbar from "@/components/StickyNavbar/StickyNavbar";
import WhiteSection from "@/components/WhiteSection";
import StickyBox from "@/components/StickyBox";

export default function Home() {
  return (
    <main>
      <SlothSection />
      <FlashSection />
      <WhiteSection />
      <StickyNavbar />
      <StickyBox />
    </main>
  );
}
