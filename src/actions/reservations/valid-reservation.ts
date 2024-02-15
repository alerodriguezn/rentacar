"use server";

import prisma from "@/lib/prisma";
import { ReservationDateRange } from "@/interfaces/reservation";

export const validReservation = async (dateRange: ReservationDateRange) => {
  try {
    const { from: startDate, to: endDate } = dateRange;

    const conflictingReservations = await prisma.reservation.findMany({
      where: {
        OR: [
          {
            AND: [
              { startDate: { lte: startDate } },
              { endDate: { gte: startDate } },
            ],
          },
          {
            AND: [
              { startDate: { lte: endDate } },
              { endDate: { gte: endDate } },
            ],
          },
          {
            AND: [
              { startDate: { gte: startDate } },
              { endDate: { lte: endDate } },
            ],
          },
        ],
      },
    });

    if (conflictingReservations.length > 0) {
      return {
        ok: false,
        message: "Invalid Reservation",
      };
    }

    return {
      ok: true,
      message: "Valid Reservation",
    };
  } catch (error) {
    return {
      ok: false,
      message: error,
    };
  }
};
