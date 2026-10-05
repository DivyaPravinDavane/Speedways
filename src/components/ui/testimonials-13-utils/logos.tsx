import React from "react";
import Image from "next/image";

export const Logo01 = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`inline-flex items-center justify-center ${props.className || ""}`}>
    <Image
      src="/logos/tata-steel.svg"
      alt="Tata Steel Logo"
      width={140}
      height={40}
      className="h-7 sm:h-8 w-auto object-contain"
    />
  </div>
);

export const Logo02 = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`inline-flex items-center justify-center ${props.className || ""}`}>
    <Image
      src="/logos/volvo.svg"
      alt="Volvo Logo"
      width={130}
      height={35}
      className="h-6 sm:h-7 w-auto object-contain"
    />
  </div>
);

export const Logo03 = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`inline-flex items-center justify-center ${props.className || ""}`}>
    <Image
      src="/logos/merck.svg"
      alt="Merck Logo"
      width={130}
      height={35}
      className="h-7 sm:h-8 w-auto object-contain"
    />
  </div>
);

export const Logo04 = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`inline-flex items-center justify-center ${props.className || ""}`}>
    <Image
      src="/logos/dbs.svg"
      alt="DBS Bank Logo"
      width={120}
      height={35}
      className="h-6 sm:h-7 w-auto object-contain"
    />
  </div>
);

export const Logo05 = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`inline-flex items-center justify-center ${props.className || ""}`}>
    <Image
      src="/logos/embassy.png"
      alt="Embassy Logo"
      width={150}
      height={45}
      className="h-8 sm:h-9 w-auto object-contain scale-110"
    />
  </div>
);

export const Logo06 = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`inline-flex items-center justify-center ${props.className || ""}`}>
    <Image
      src="/logos/bcd-travel.svg"
      alt="BCD Travel Logo"
      width={130}
      height={35}
      className="h-7 sm:h-8 w-auto object-contain"
    />
  </div>
);
