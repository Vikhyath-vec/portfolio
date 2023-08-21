import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 192, height = 192 }) => {
    return (
        <Image
            className={`w-${width} h-${height}`}
            src="/android-chrome-192x192.png"
            alt="Logo"
            width={width}
            height={height}
        />
    );
};

export default Logo;
