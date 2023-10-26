import "./styles/reset.css";
import "./globals.css";
import "./lib/clientLoaders";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import { Metadata } from "next";
import { Footer, Header, HiddenElement } from "@/widgets/ui";
import { Main } from "./styles/Main";

export const metadata: Metadata = {
  title: "Bictory.domains",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
          limit={5}
        />

        <Header />

        <Main>{children}</Main>

        <Footer />

        <HiddenElement />
      </body>
    </html>
  );
}
