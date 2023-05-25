"use client";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LinkButtonProps {
  text: string;
  href?: string;
}

const IconChevron: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="#554ad8"
        d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"
      />
    </svg>
  );
};

/**
 * @param {string} text string
 * @param {string} href string: optional, If undefined, sends the user to the previous page
 * @returns React.JSX.Element
 */
const LinkButton: FC<LinkButtonProps> = ({ text, href }) => {
  const router = useRouter();
  if (href === undefined)
    return (
      <button
        onClick={router.back}
        className="flex items-center justify-start w-[160px] h-[48px] uppercase"
      >
        <span className="pt-[4px] leading-[16px]">{text}</span>
        <IconChevron />
      </button>
    );
  else
    return (
      <Link
        href={`${href !== undefined ? href : "/"}`}
        className="flex items-center justify-start w-[160px] h-[48px] uppercase"
      >
        <span className="pt-[4px] leading-[16px]">{text}</span>
        <IconChevron />
      </Link>
    );
};

export default LinkButton;
