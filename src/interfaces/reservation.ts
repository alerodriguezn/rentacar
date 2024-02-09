

export interface Reservation {
    id: string;
    startDate: Date;
    endDate: Date;
    user: {
        email: string | null;
    };
}