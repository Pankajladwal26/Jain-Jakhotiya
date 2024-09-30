import React, { forwardRef } from "react";
import ButtonSvg from "../assets/Button";

const Button = forwardRef(({ className, href, onClick, children, px, white }, ref) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"
    } ${white ? "text-n-1" : "text-n-8"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick} ref={ref}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} ref={ref}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
});

export default Button;