import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/img1009.png"
        alt="1009 Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
