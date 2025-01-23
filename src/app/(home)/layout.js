import "./../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Next Js Assignment",
  description: "Created by Obidy Hasan Naim",
};

export default function HomeLayout({ children }) {
  return (
    <section>
      <Navbar></Navbar>
      <main className="min-h-screen">{children}</main>
      <Footer></Footer>
    </section>
  );
}
