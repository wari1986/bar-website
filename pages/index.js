import HeroImage from "../components/HeroImage";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-full h-full mt-8 sm:w-3/4 md:w-3/4 md:mt-24 lg:mt-12 lg:w-2/3 xl:w-3/5 xl:mt-2 2xl:w-2/5 2xl:mt-4">
        <HeroImage />
      </div>
    </div>
  );
}
