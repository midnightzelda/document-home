import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

type Message = string;

declare global {
  interface Window {
    ipc: {
      on: (channel: string, listener: (message: Message) => void) => void;
    };
  }
}

export default function HomePage() {
  const [message, setMessage] = React.useState("No message found");

  

  React.useEffect(() => {
    window.ipc.on("message", (message) => {
      setMessage(message);
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Document Center</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js Just a test ⚡ - <Link href="/next">Go to next page</Link>
        </p>
        <Image
          src="/images/logo.png"
          alt="Logo image"
          width={256}
          height={256}
        />
      </div>
      <div>
        <p>{message}</p>
      </div>
    </React.Fragment>
  );
}
