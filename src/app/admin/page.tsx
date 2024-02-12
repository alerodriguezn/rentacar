import { getAllReservations } from "@/actions";
import { DataTable } from "./data-table";

export default async function AdminPage() {
  const { ok, data } = await getAllReservations();


  if (!data) {
    return <div>Loading...</div>;
  }

  if (!ok) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mt-2">Reservaciones</h2>
      <DataTable data={data} />
    </div>
  );
}
