"use client";
import { useState } from "react";

export default function Home() {

  const [theInput, setTheInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Yo, this is ChatterBot! How can I help you today?",
    },
  ]);

const Submit = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      callGetResponse();
    }
  };

  return(
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-5">
          <h1 className="text-5xl font-sans">ChatterBot</h1>
    
          <div className="flex  h-[35rem] w-[40rem] flex-col items-center bg-gray-600 rounded-xl">
            <div className=" h-full flex flex-col gap-2 overflow-y-auto py-8 px-3 w-full">
    we're gonna do something here
    </div>
    <div className="relative  w-[80%] bottom-4 flex justify-center">
              <textarea
                value={theInput}
                onChange={(event) => setTheInput(event.target.value)}
                className="w-[85%] h-10 px-3 py-2 resize-none overflow-y-auto text-black bg-gray-300 rouded"
                onKeyDown={Submit}
              />
              <button
                onClick={callGetResponse}
                className="w-[15%] bg-blue-500 px-4 py-2 rounded-sm "
              >
                send
              </button>
            </div>
          </div>
    
          <div></div>
        </main>
      );
  
  }

  