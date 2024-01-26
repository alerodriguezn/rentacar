import Image from "next/image";
import { CarrouselCarImages } from "@/components";

export default function InformationPage() {
  return (
    <main className="w-[60%]">
      <div className="mt-4">
        <div className="flex justify-center gap-4">
          <Image
            src="/imgs/toyota-logo.svg"
            alt="Toyota Logo"
            width={40}
            height={40}
          />
          <h2 className="text-center text-2xl font-bold">Toyota Yaris Advance 2018</h2>
        </div>

        <div className="flex flex-col items-center gap-2 mt-4">
          <div>
            <CarrouselCarImages />
          </div>
          <div>
            <div className="flex gap-8 justify-center">
              <div className="flex flex-col items-center justify-center gap-1">
                <Image
                  src="/imgs/gearshift.svg"
                  alt="GearShift"
                  width={30}
                  height={30}
                />
                <span className="font-light text-xs">Automático</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <Image
                  src="/imgs/seat.svg"
                  alt="GearShift"
                  width={30}
                  height={30}
                />
                <span className="font-light text-xs">5 pasajeros</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <Image
                  src="/imgs/gas.svg"
                  alt="GearShift"
                  width={30}
                  height={30}
                />
                <span className="font-light text-xs">Gasolina</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <Image
                  src="/imgs/engine.svg"
                  alt="GearShift"
                  width={30}
                  height={30}
                />
                <span className="font-light text-xs">1.5</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <Image
                  src="/imgs/wheel.svg"
                  alt="GearShift"
                  width={30}
                  height={30}
                />
                <span className="font-light text-xs">Trasera</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
