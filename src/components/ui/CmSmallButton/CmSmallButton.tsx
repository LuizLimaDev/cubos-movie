import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  src: string;
  alt: string;
}

export default function CmSmallButton({
  className,
  src,
  alt,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${className} flex-center h-12 w-16 rounded-sm bg-purpleDark-4/30`}
      {...props}
    >
      <img src={src} alt={alt} width={24} height={24} />
    </button>
  );
}
