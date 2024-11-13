import { faker } from "@faker-js/faker";

export type ApplicationStatus =
  | "applied"
  | "got-response"
  | "interview"
  | "offer"
  | "rejected"
  | "accepted";

export interface NoteDetails {
  id: string;
  user: string;
  email: string;
  companyName: string;
  position: string;
  salary: string;
  appliedOnDate: Date;
  applicationStatus: ApplicationStatus;
}

// NOTE: keep these comments for the future as they will be needed
// this will create an array of notes that I need for testing
const NotesData: NoteDetails[] = Array.from({ length: 10 }, () => ({
  // this is the ID of the application
  id: faker.string.uuid(),
  // this is currently just a random full name
  // will later be replaced with a full name of the current auth user
  user: faker.person.fullName(),
  // random email will be replaced with the email of the curr user
  // or can insert a custom email of choice (the one user applied with)
  email: faker.internet.email(),
  // company name will be added manually, but can later be selected (???search) from the DB
  companyName: faker.company.name(),
  position: faker.person.jobTitle(),
  salary: faker.finance.amount(),
  // will be calculated on saving the note
  appliedOnDate: faker.date.recent({ days: 10 }),
  // will change (not final options)
  applicationStatus: faker.helpers.arrayElement([
    "applied",
    "got-response",
    "interview",
    "offer",
    "rejected",
    "accepted",
  ]),
}));

export default function getNotes(): NoteDetails[] {
  return NotesData;
}
