

export interface Reservation {
    id: string;
    startDate: Date;
    endDate: Date;
    users: {
        email: string | null;
    };
}