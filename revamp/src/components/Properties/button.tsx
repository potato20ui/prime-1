import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
  isLoading?: boolean; // Optional loading state
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  isLoading = false,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-[var(--color-PRIMEblue)] text-[var(--color-PRIMEwhite)] hover:bg-[var(--color-PRIMEblue)] active:bg-[var(--color-PRIMEblue)]",
    ghost: "bg-transparent text-[var(--color-PRIMEblack)] border border-[var(--color-PRIMEgray)] hover:bg-[var(--color-PRIMElightgray)] active:bg-[var(--color-PRIMEgray)]",
  };

  const sizes = {
    default: "px-4 py-2 text-sm",
    icon: "p-2",
  };

  const loadingClass = isLoading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${loadingClass} ${className}`}
      disabled={isLoading} // Disable button during loading
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin"></span> // Loading spinner (or you can use an icon from a library like FontAwesome)
      ) : (
        props.children
      )}
    </button>
  );
}
