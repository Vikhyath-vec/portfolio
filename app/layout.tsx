import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.seekvisualartist.com/"),
    title: "Vikhyath's Portfolio",
    description:
    "A passionate tech enthusiast with a strong affinity for backend and frontend development. My diverse interests span across the realms of image processing, video content analysis, machine learning, and data-driven astronomy.",
    generator: "Next.js",
    applicationName: "Vikhyath's Portfolio",
    keywords: [
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "india",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
        "developer portfolio",
        "engineer portfolio",
        "image processing",
        "video content analysis",
        "football",
        "data-driven astronomy",
        "machine learning",
        "deep learning",
        "computer vision",
        "IITH",
        "IIT Hyderabad",
        "IIT",
        "Hyderabad",
        "Indian Institute of Technology Hyderabad",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Vikhyath Kothamasu - Developer and Researcher",
        description:
      "A passionate tech enthusiast with a strong affinity for backend and frontend development. My diverse interests span across the realms of image processing, video content analysis, machine learning, and data-driven astronomy.",
        url: "https://www.seekvisualartist.com/",
        siteName: "www.seekvisualartist.com",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Seek Visual Artist - Designer and Developer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vikhyath Kothamasu - Developer and Researcher",
        description:
      "A passionate tech enthusiast with a strong affinity for backend and frontend development. My diverse interests span across the realms of image processing, video content analysis, machine learning, and data-driven astronomy.",
        creator: "Vikhyath Kothamasu",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
