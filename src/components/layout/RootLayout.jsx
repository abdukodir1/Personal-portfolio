import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

function RootLayout() {
  return (
    <div className="overflow-x-hidden  text-stone-300 antialiased flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="flex flex-col flex-grow container mx-auto px-8">
        <header>
        <Navbar/>
        </header>
        <main className="flex-grow">
          <Outlet />
        </main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default RootLayout;
