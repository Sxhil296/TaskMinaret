import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
// import Navbar from "@/components/Navbar";
import VerseWidget from "@/components/VerseWidget";
import NamazWidget from "@/components/NamazWidget";
import PomodoroWidget from "@/components/PomodoroWidget";
import CalendarWidget from "@/components/CalendarWidget";
import CalculatorWidget from "@/components/CalculatorWidget";
import TodoWidget from "@/components/TodoWidget";
import NasheedPlayer from "@/components/NasheedPlayer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TaskMinaret</title>
        <meta
          name="description"
          content="A productivity tool that keeps you attached to your deen."
        />
      </Head>

      <h1 className="text-white text-3xl justify-center container mx-auto text-center mt-10 font-bold">TaskMinaret</h1>
      {/* <div className="p-6 container mx-auto mt-20">
        <div className="relative mb-4">
          <div className="bg-transparent  rounded-lg shadow-md h-[570px] w-[430px]">
            <TodoWidget />
          </div>
          <div className="absolute top-0 left-[450px] grid grid-cols-3 gap-4 mt-0">
            <div className="bg-purple-200 p-4 rounded-lg shadow-md">
              <VerseWidget />
            </div>
            <div className="bg-green-200 p-4 rounded-lg shadow-md">
              <NamazWidget />
            </div>
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
              <CalendarWidget />
            </div>
            <div className="bg-rose-200 p-4 rounded-lg shadow-md">
              <PomodoroWidget />
            </div>
            <div className="bg-blue-200 p-4 rounded-lg shadow-md">
              <CalculatorWidget />
            </div>
            <div className="bg-red-200 p-4 rounded-lg shadow-md">
              <NasheedPlayer />
            </div>
          </div>
        </div>
      </div> */}

<div className="p-6 container mx-auto mt-10 ">
  <div className="relative mb-4 flex flex-col md:flex-row lg:ml-8">
    <div className="bg-transparent rounded-lg shadow-md h-[762px] md:w-[420px] md:mr-6">
      <TodoWidget />
    </div>
    <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-purple-200 p-4 rounded-lg shadow-md">
        <VerseWidget />
      </div>
      <div className="bg-green-200 p-4 rounded-lg shadow-md">
        <NamazWidget />
      </div>
      <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
        <CalendarWidget />
      </div>
      <div className="bg-rose-200 p-4 rounded-lg shadow-md">
        <PomodoroWidget />
      </div>
      <div className="bg-blue-200 p-4 rounded-lg shadow-md">
        <CalculatorWidget />
      </div>
      <div className="bg-gray-300 p-4 rounded-lg shadow-md">
        <NasheedPlayer />
      </div>
    </div>
  </div>
</div>
      <footer className="text-white text-xl justify-center container mx-auto text-center mt-0"> <p>Build with &hearts; by Sahil</p></footer>
  
    </>
  );
}
