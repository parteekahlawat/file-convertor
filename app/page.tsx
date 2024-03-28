import Image from "next/image";
import Navbar from "./comps/navbar"
import Dragdrop from "./comps/dragDrop"
import Footer from "./comps/footer"
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Dragdrop />
      <Footer/>
    </main>
    </>
    
  );
}
