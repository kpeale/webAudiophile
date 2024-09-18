type ButtonProps = {
  children: string;
  bgColor: string;
  hoverColor: string;
  textColor: string;
  hoverTextColor?: string;
};

const Button = ({
  children,
  bgColor,
  hoverColor,
  textColor,
  hoverTextColor,
}: ButtonProps) => {
  return (
    <button
      className={`font-manrope text-[13px] px-4 lg:px-2 md:px-6 lsm:px-1 py-3 uppercase font-bold leading-none`}
      style={{ backgroundColor: bgColor, color: textColor }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
        if (hoverTextColor) {
          e.currentTarget.style.color = hoverTextColor;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
        e.currentTarget.style.color = textColor;
      }}
    >
      {children}
    </button>
  );
};

export default Button;
