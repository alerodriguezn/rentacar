import { getAllReservations } from "@/actions";
import { DataTable } from "./data-table";

export default async function AdminPage() {

 const { ok, data } = await getAllReservations();

 if(!ok){
    return <div>Something went wrong</div>
 }

  return (
    <div>
      <DataTable data={data}/>
    </div> 
  );
}