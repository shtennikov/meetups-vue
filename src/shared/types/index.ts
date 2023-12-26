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

export type AgendaTypes =
    | 'registration'
    | 'opening'
    | 'talk'
    | 'break'
    | 'coffee'
    | 'closing'
    | 'afterparty'
    | 'other';

export interface Agenda {
    id: number;
    startsAt: string;
    endsAt: string;
    type: AgendaTypes;
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
    date: string;
    participation: string;
    search: string;
}

export type View = 'list' | 'calendar';

export type FilterOptions = Filters & { view: View };
