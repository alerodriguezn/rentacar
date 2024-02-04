import Image from "next/image";
import Link from "next/link";
import { DatePickerWithRange } from '../../components/ui/date-range-picker';
import { createClient } from "@/lib/supabaseServer";
import { cookies } from "next/headers";


export default async function Home() {

  const cookiesStore = cookies()
  const supabase = createClient(cookiesStore)
  const { data } = await supabase.auth.getUser();
  console.log(data)


  return (
    <main className="w-3/4">
      <section className="flex items-center justify-center ">
        <div className="flex flex-col items-baseline gap-10">
          <h2 className=" font-bold text-4xl">
            <p>Descubre, Conduce, Disfruta:</p>
            <p>
              {" "}
              <span className="text-[#3b83f7]">Alquila</span> tu Próximo Carro
            </p>
          </h2>
          <Link
            href={"/information"}
            className="bg-[#3b83f7] rounded-md text-white text-lg w-1/3  h-10 flex items-center justify-center font-medium"
          >
            Conocer más
          </Link>
        </div>

        <div>
          <Image
            src={"/imgs/yaris-2018.png"}
            alt="Yaris 2018"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-4">
        <h2 className="text-center text-2xl font-medium mb-4">Consulta la dispobilidad:</h2>
        <DatePickerWithRange/>

      </section>
    </main>
  );
}
