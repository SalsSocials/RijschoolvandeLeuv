import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsappFab } from "./WhatsappFab";
import { ScrollProgress } from "./ScrollProgress";
import { MouseGlow } from "./MouseGlow";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
