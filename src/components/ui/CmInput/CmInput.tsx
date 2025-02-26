interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  src?: string;
  alt?: string;
  placeholder?: string;
  setQueryParams: React.Dispatch<React.SetStateAction<string>>;
}

export default function CmInput({
  type,
  src,
  alt,
  placeholder,
  setQueryParams,
  ...props
}: InputProps) {
  let timer;

  return (
    <div className="flex-center h-14 w-[80%] justify-between rounded border border-mauveDark-7 bg-mauveDark-2 px-4 py-[18.5px]">
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className="bg-mauveDark-2 pl-2 placeholder:text-mauveDark-9"
        onChange={(e) => {
          clearTimeout(timer);

          setTimeout(() => {
            setQueryParams(e.target.value);
          }, 2000);
        }}
      />
      {src && <img src={src} alt={alt} width={24} height={24} />}
    </div>
  );
}
