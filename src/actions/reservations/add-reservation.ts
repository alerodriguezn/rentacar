'use server'

import { auth } from "@/auth.config";
import { ReservationDateRange } from "@/interfaces/reservation";
import prisma from "@/lib/prisma";

export const addReservation = async (dateRange: ReservationDateRange) => {
  const session = await auth();

  if (!session?.user.id) {
    return {
      ok: false,
      message: "User Not Found",
    };
  }

  try {

    const { startDate, endDate } = dateRange;

    

    

    // if(!conflictingReservations){
    //   return {
    //     ok: false,
    //     message: 'Reservation dates are not valid'
    //   }
    // }

    const reservationData = {
      startDate: startDate,
      endDate: endDate,
      userId: session.user.id,
    };

    const reservation = prisma.reservation.create({
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
