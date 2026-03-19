import { cva } from "class-variance-authority";

const buttonVariants = cva(
  `focus-visible:border-ring focus-visible:ring-ring/50 group/button inline-flex
  shrink-0 items-center justify-center rounded-lg border border-transparent
  bg-clip-padding font-medium whitespace-nowrap transition-all outline-none
  select-none [&_svg]:pointer-events-none`,
  {
    variants: {
      variant: {
        default: `bg-primary-500 text-primary-50 [a]:hover:bg-primary-600
        font-bold`,
        outline: `hover:bg-primary-100 bg-primary-50 text-text
        shadow-[inset_0_0_0_3px_var(--color-primary-50)]`,
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export { buttonVariants };
