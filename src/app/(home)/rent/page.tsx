import Image from "next/image";
import { RentForm } from './ui/rent-form';

export default function RentPage() {
  return (
    <div className="w-2/3 flex ">
      <div className="w-1/2  flex justify-center items-end">
        <Image
          src="/imgs/yaris-2018.png"
          alt="Toyota Logo"
          width={400}
          height={400}
        />
      </div>
      <div className="w-1/2 p-4">
        <h3 className="text-3xl font-bold">Toyota Yaris Advance 2018</h3>
        <p className="font-bold my-4 text-xl">
          $70 <span className="font-medium">/ día</span>
        </p>
        <RentForm/>
      </div>
    </div>
  );
}
