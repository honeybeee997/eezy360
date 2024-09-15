import HomepageBanner from "@/components/homepage/Banner";
import Logo from "./components/brand/Logo";
import Nav from "@/components/ui/Nav";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between py-4 px-8 absolute top-5 left-0 right-0 z-10 w-full">
        <Logo />
        <Nav />
      </header>
      <HomepageBanner />
    </>
  );
}
