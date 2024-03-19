import "./globals.css";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Chatbot Codigo Solution GPT",
  description:
    "Prova il nostro bot che puo essere tuo dentro la tua azienda a facilitare il lavore per te",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoFlex.className}>{children}</body>
    </html>
  );
}
