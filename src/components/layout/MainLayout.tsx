import type React from "react";
import { MainHeader } from "./MainHeader";
import TopBar from "./TopBar";
import { CategoryNav } from "./CategoryNav";
import { Footer } from "./Footer";

export function MainLayout({children}: {children: React.ReactNode}){
    return(
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <MainHeader />
          <CategoryNav />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />

        </div>
    )
}