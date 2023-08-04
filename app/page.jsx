"use client";

import { Inter } from "next/font/google";
import Main from "./components/Home/Main";
import { useEffect, useState } from "react";
import ClientOnly from "./components/ClientOnly";

const font = Inter({ subsets: ["latin"] });

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {/* <section>
        <ClientOnly>
          <Main />
        </ClientOnly>
      </section> */}
      
      {domLoaded && (
        <section>
          <ClientOnly>
            <Main />
          </ClientOnly>
        </section>
       )} 
    </>
  );
}