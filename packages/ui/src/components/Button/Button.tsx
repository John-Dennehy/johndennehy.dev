import { ReactElement, ReactNode } from "react";
import { cva, VariantProps } from 'class-variance-authority'

const styles = cva("transition-all ease-in-out duration-300  text-brandTextLight rounded-full p-2", {
  variants: {
    color: {
      default: "bg-brandPrimary  hover:bg-brandPrimaryDark",
      accent: "bg-brandAccent hover:bg-brandAccentDark",
    },
    outline: {
      true: "border border-brandPrimary hover:bg-brandPrimary hover:text-brandTextLight",
      false: "border border-transparent",
    },
    shadow: {
      true: "shadow-md",
      false: "shadow-none",
    }
  },
  defaultVariants: {
    color: "default",
    outline: false,
    shadow: true,
  },
})

interface ButtonWithEvent extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof styles> {
  href?: never;
  outline?: boolean;
  shadow?: boolean;
  color?: "default" | "accent";
}

type ButtonWithHref = {
  children: ReactNode;
  href: string;
  component?: ReactElement;
  onClick?: never;
  color?: "default" | "accent";
  outline?: boolean;
  shadow?: boolean;
};

type ButtonProps = ButtonWithEvent | ButtonWithHref;

export const Button = ({
  color = "default",
  outline,
  href,
  onClick,
  children,
}: ButtonProps) => {


  return (
    <button onClick={onClick} className={styles({ color, outline, })}>
      {children}
    </button>
  );
};
