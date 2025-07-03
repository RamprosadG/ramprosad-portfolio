import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const MainLayout: React.FC = () => {
  return (
    <div className="bg-[#161616] font-serif text-white">
      <div className="w-full max-w-[1200px] mx-auto flex">
        {/* Left Sidebar */}
        <aside className="hidden md:block w-1/3 bg-[#21212b] h-screen overflow-y-auto sticky top-0">
          <div className="p-4">
            <Sidebar />
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="w-full md:w-2/3 flex flex-col min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-50 h-[70px] bg-[#18181f] px-4 flex justify-center items-center">
            <Header />
          </header>

          {/* Main Content */}
          <main className="flex-grow py-6 px-5">
            <MainContent />
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-4 text-center">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
