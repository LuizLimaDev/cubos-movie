import { ChangeEvent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  src?: string;
  alt?: string;
  placeholder?: string;
  setQueryParams: React.Dispatch<React.SetStateAction<string | undefined>>;
  setGenreFilter: React.Dispatch<
    React.SetStateAction<number | number[] | undefined>
  >;
}

export default function CmInput({
  type,
  src,
  alt,
  placeholder,
  setQueryParams,
  setGenreFilter,
  ...props
}: InputProps) {
  let timer;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value === "") {
      setGenreFilter(undefined);
    }

    clearTimeout(timer);

    setTimeout(() => {
      setQueryParams(value);
    }, 2000);
  }

  return (
    <div className="flex-center ligth h-14 w-[80%] max-w-[488px] justify-between rounded border border-mauveDark-7 px-4 py-[18.5px]">
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className="colorTheme pl-2 placeholder:text-mauveDark-9"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {src && <img src={src} alt={alt} width={24} height={24} />}
    </div>
  );
}
