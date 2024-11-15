"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function performLogin(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    
    try{
      const response = await fetch('/api/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      if(response.ok){
        const data = await response.json();
        console.log('Success:', data);
        router.push('/dashboard');
      }
      else{
        const errorData = await response.json(); // Parse error JSON
        console.error('Error occurred while trying to log in:', errorData.message);
      }
    }
    catch(error){
      console.error('Error occurred while trying to log in:', error);
      alert(error);
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/SAP Business One Logo.png"
          alt="SAP Business One logo"
          width={300}
          height={120}
          priority
        />

        <form onSubmit={performLogin} className="flex flex-col items-center gap-0">
          <label htmlFor="username">Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)}></input>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button type="submit"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 mt-4"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Login
          </button>
        </div>
        </form>

      </main>
      {/* ---- Footer ---- */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ecs-online.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/ECS Logo.png"
            alt="File icon"
            width={40}
            height={40}
          />
          About Us
        </a>
      </footer>
    </div>
  );
}
