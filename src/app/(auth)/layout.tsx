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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Faha - Auth",
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
                    <header></header>
                    <main>{children}</main>
                </body>
            </html>
        </ClerkProvider>
    );
}
