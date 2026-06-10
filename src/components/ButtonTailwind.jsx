export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={` text-white
        py-[10px]
        px-[18px]
        bg-black
        rounded-[5px]
        min-w-[220px]
        border
        border-transparent
        text-base
        cursor-pointer
        transition-all
        duration-300
        hover:bg-white
        hover:border-black
        hover:text-black
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export const OutlineButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        text-black
        py-[10px]
        px-[18px]
        bg-white
        rounded-[5px]
        min-w-[220px]
        border
        border-black
        text-base
        cursor-pointer
        transition-all
        duration-300
        hover:bg-black
        hover:border-transparent
        hover:text-white
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
