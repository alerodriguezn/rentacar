'use server'

import { auth } from "@/auth.config";
import { ReservationDateRange } from "@/interfaces/reservation";
import prisma from "@/lib/prisma";
import { validReservation } from "./valid-reservation";

export const addReservation = async (dateRange: ReservationDateRange) => {
  const session = await auth();


  if (!session?.user.id) {
    return {
      ok: false,
      message: "User Not Found",
    };
  }

  try {

    const { ok } = await validReservation(dateRange);


    if(!ok){
      return {
        ok: false,
        message: "Invalid Range Date",
      };
    }



    const reservationData = {
      startDate: dateRange.from,
      endDate: dateRange.to,
      userId: session.user.id,
    };

    const reservation = await prisma.reservation.create({
      data: reservationData,
    });


    if (!reservation) {
      return {
        ok: false,
        message: "We cannot create the reservation",
      };
    }
  } catch (error) {
    return{
        ok: false,
        message: 'Something went wrong!'
    }

  }
};
