export const metadata = {
  title: "John Dennehy - CV",
  description: "CV for John Dennehy",
};

type CVLayoutProps = {
  children: React.ReactNode;
};

export default function CVLayout({ children }: CVLayoutProps) {
  return <>{children}</>;
}
