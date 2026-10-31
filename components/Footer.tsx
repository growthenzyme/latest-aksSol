"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8EAED] bg-white px-5 py-[58px] sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-[12px] font-normal leading-[1.5] text-[#667085] sm:text-left">
          © 2026{" "}
          <Link
            href="https://growthenzyme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#25232A] hover:underline"
          >
            GrowthEnzyme
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}