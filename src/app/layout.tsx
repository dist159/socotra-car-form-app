import { Roboto, Space_Grotesk, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/ui/components/header/header";
import { FormProvider } from "@/context/form-context/form.provider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const spaceGrotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${spaceGrotesk.variable} ${raleway.variable}`}
    >
      <body>
        <FormProvider>
          <Header />
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
