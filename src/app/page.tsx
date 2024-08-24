"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Calculator, History, Menu, Settings } from "lucide-react";
const button_calcu = Array.from({ length: 24 }, (_, id) => id + 1);

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <main className="flex h-screen  flex-col items-center justify-center ">
      <div className="h-[560px] w-[380px] flex flex-col border rounded-lg">
        <div>
          <div className="w-full flex flex-col  justify-between  text-[3rem] h-[240px] border-b border-t-0 border-x-0 rounded-b-none">
            <div className=" items-center  flex flex-col">
              <div className="w-full h-[40px] px-[1rem] flex gap-[1rem] items-center">
                <Calculator />
                <p className="text-sm">Calculator</p>
              </div>
              <div className="w-full h-[40px] items-center border-t flex px-[1rem] justify-between">
                <Menu className="" />
                <History className="" />
              </div>
            </div>
            <p className="self-end">{value}</p>
          </div>
        </div>
        <div className="w-full px-2 py-3 h-full gap-[2px] justify-items-center place-content-end grid grid-cols-4">
          {button_calcu.map((button_calcu, id) => (
            <div
              onClick={(e) => setValue(`${id}`)}
              className="w-[87.5px] hover:bg-muted select-none cursor-pointer transition-[background] flex items-center justify-center h-[45px] border rounded-md"
              key={`${id}`}
            >
              {id}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
