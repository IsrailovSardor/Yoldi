import type { AppProps } from 'next/app'
import { useEffect } from "react"
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import '@/assets/styles/globals.css'
import Header from "@/components/Header/Header"


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const scroll = () => {
    const isUserAuth = localStorage.getItem("token");
    if (isUserAuth === null) router.push("/sign-in");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    scroll()
  }, []);

  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </main >
  )
}
