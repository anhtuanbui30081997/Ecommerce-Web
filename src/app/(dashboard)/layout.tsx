import type { Metadata } from "next";
import {
  ClerkProvider,
  SignedOut,
  SignedIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSideBar from "@/components/layout/LeftSideBar";
import TopBar from "@/components/layout/TopBar";
import { ToasterProvider } from "@/lib/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faha - Admin Dashboard",
  description: "Admin dashboard to manage Faha's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ToasterProvider />
          <div className="flex max-lg:flex-col text-gray-1">
            <LeftSideBar />
            <TopBar />
            <div className="flex-grow">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
