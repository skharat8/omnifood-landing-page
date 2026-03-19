import { ChevronDownIcon } from "@radix-ui/react-icons";

import HeroImage from "../assets/images/hero.png";
import DeliveredMeals from "./DeliveredMeals";
import Button from "./ui/Button";

function HeroSection() {
  return (
    <section className="py-9">
      <div className="grid max-w-7xl grid-cols-2 items-center gap-9">
        <div>
          <h1 className="text-gray-dark mb-6 text-5xl leading-[1.05] font-bold">
            A healthy meal delivered to your door, every single day
          </h1>

          <p className="mb-7 text-lg leading-[1.6]">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>

          <div className="mb-8 flex gap-4">
            <Button className="inline-block" asChild>
              <a href="#">Start eating well</a>
            </Button>
            <Button className="flex gap-2 pr-3" variant="outline" asChild>
              <a href="#">
                <span>Learn more</span>
                <ChevronDownIcon />
              </a>
            </Button>
          </div>

          <DeliveredMeals />
        </div>

        <img
          src={HeroImage}
          alt="Multiple photos of delicious food and a woman enjoying a meal"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default HeroSection;
