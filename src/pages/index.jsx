import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Layout from "@/components/Layout";
import Workwork from "@/components/Workwork";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Intro/>
      <Work/>
      <Workwork/>
    </Layout>
  );
}
