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

    //TODO: Date Range Validation

    const reservationData = {
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
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
