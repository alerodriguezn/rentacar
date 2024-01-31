import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CarrouselCarImages } from "@/components";

export default function InformationPage() {
  return (
    <main className="w-[60%] flex flex-col gap-2">
      <section className="mt-4 ">
        <div className="flex justify-center gap-4">
          <Image
            src="/imgs/toyota-logo.svg"
            alt="Toyota Logo"
            width={40}
            height={40}
          />
          <h2 className="text-center text-2xl font-bold">
            Toyota Yaris Advance 2018
          </h2>
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
      </section>
      <section className="flex flex-col justify-center  ">
        <h2 className="text-2xl font-bold mt-4 text-center">
          Detalles del Vehículo
        </h2>
        <div className="flex justify-center gap-2 mt-2">
          <Card className="w-[40%]">
            <CardHeader>
              <CardTitle>Parte Externa</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src={"/imgs/externo.jpeg"}
                alt="Externo"
                width={300}
                height={300}
                className="rounded"
              />
              <ul className="font-light flex flex-col  gap-1 mt-2 list-disc max-w-[24ch]">
                <li>Aros de Lujo</li>
                <li>Halógenos</li>
                <li>Antena de techo</li>
                <li>Expejos retrovisores eléctricos</li>
                <li>Manillas Cromadas</li>
                <li>Parrilla Cromada</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="w-[40%]">
            <CardHeader>
              <CardTitle>Parte Interna</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src={"/imgs/interno.jpeg"}
                alt="Externo"
                width={300}
                height={300}
                className="rounded"
              />
              <ul className="font-light flex flex-col  gap-1 mt-2 list-disc max-w-[24ch] ">
                <li>Aire Acondicionado</li>
                <li>Asientos delanteros (delizables, reclinables)</li>
                <li>Controles de Audio en el volante con Bluetooth</li>
                <li>Tapicería en tela</li>
                <li>Vidrios eléctricos</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
