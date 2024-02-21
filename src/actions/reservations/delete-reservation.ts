"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export const deleteReservation = async (reservationId: string) => {
  const session = await auth();

  if (session?.user.role !== "admin") {
    return {
      ok: false,
      message: "Invalid User",
    };
  }

  try {
    const deletedReservation = await prisma.reservation.delete({
      where: {
        id: reservationId,
      },
    });

    if (!deletedReservation) {
      return {
        ok: false,
        message: "We cannot delete the reservation",
      };
    }

    return {
      ok: true,
      message: "Reservation Deleted Succesfully",
    };
  } catch (error) {
    return {
      ok: false,
      message: "We cannot delete the reservation",
    };
  }
};
