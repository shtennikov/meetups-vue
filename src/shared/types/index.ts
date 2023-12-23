export interface SelectionListRenderingOptions {
    value: string;
    text: string;
    icon?: string;
}

export interface DayData {
    day: number;
    stringDate: string;
    isCurrentMonth: boolean;
}

export interface Agenda {
    id: number;
    startsAt: string;
    endsAt: string;
    type: string;
    title: string | null;
    description: string | null;
    speaker: string | null;
    language: string | null;
}
export interface Meetup {
    id: number;
    title: string;
    description: string;
    imageId: number;
    image: string;
    date: number;
    dateIso: string;
    organizer: string;
    place: string;
    organizing: boolean;
    attending: boolean;
    agenda: Agenda[];
}

export interface Filters {
    date: 'all' | 'past' | 'future';
    participation: 'all' | 'organizing' | 'attending';
    search: string;
}

export type View = 'list' | 'calendar';
