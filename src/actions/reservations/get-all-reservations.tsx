"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/lib/supabaseServer";
import { cookies } from "next/headers";

export const getAllReservations = async () => {
  const cookiesStore = cookies();
  const supabase = createClient(cookiesStore);
  const user = await supabase.auth.getUser();

  if (!user) {
    return {
      ok: false,
      data: null,
    };
  }

  try {
    const userRole = user.data.user?.role;

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
        users: {
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
