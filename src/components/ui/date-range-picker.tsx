"use client";

import { useEffect } from "react";
import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { validReservation } from "@/actions";
import { format } from "date-fns";

type ValidationStatus = "available" | "invalid" | "none";

const statusMessages = {
  available: "✅ Fechas Disponibles",
  invalid: "❌ Fechas No Dispobibles ",
  none: "Selecciona un rango de fechas",
};

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>();
  const [validationStatus, setValidationStatus] =
    React.useState<ValidationStatus>("none");

  useEffect(() => {
    checkDateRange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const checkDateRange = async () => {
    if (!date?.from || !date?.to) return;

    const dateRange = {
      from: date.from,
      to: date.to,
    };

    const { ok } = await validReservation(dateRange);

    if (!ok) {
      setValidationStatus("invalid");

      return;
    }

    setValidationStatus("available");
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[400px] justify-center text-center font-semibold border-zinc-400",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      <div className="bg-slate-100 rounded-md">
        <p className="text-center py-2 font-light">
          {statusMessages[validationStatus]}
        </p>
      </div>
    </div>
  );
}
