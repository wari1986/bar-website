import HeroImage from "../components/HeroImage";
import HeroWelcome from "../components/HeroWelcome";

export default function Home() {
  return (
    <div className="bg-fixed bg-center bg-cover px-6">
      <HeroWelcome />
      <HeroImage />
    </div>
  );
}
