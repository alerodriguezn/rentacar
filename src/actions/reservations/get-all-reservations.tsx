"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";


export const getAllReservations = async () => {

  const session = await auth()



  if (!session?.user.id) {
    return {
      ok: false,
      data: null,
    };
  }

  try {
    const userRole = session?.user.role;
    console.log(userRole)

    if (userRole !== "admin") {
      return {
        ok: false,
        data: null,
      };
    }

    const reservations = await prisma.reservation.findMany({
      select: {
        id: true,
        startDate: true,
        endDate: true,
        user: {
          select: {
            email: true,
          }
        }
      },
    });



    return {
      ok: true,
      data: reservations,
    };
  } catch (error) {
    return {
      ok: false,
      data: null,
    };
  }
};
