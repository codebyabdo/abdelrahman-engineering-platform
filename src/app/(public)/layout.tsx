import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />

      <main>{children}</main>
      
      <Footer />
    </>
  );
}
