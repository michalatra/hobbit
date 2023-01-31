import { BehaviorSubject } from "rxjs";
import { RegistrationData } from "../models/ui/data/RegistrationData";
import { RegistrationGroupData } from "../models/ui/data/RegistrationGroupData";

const activeRegistrations = new BehaviorSubject<RegistrationData[]>([
  {
    id: "1",
    title: "Conference",
    startTime: new Date("2022-05-01T09:00:00Z"),
    endTime: new Date("2022-05-03T17:00:00Z"),
    yearName: "Informatyka 2022",
    groups: [
      {
        id: "1",
        name: "Group A",
        blocks: [
          {
            title: "Block 1",
            startTime: new Date("2022-02-01T08:00:00"),
            duration: 2,
            umcsYear: "2",
            comment: "Introduction to Programming",
            classroom: 101,
            lecturer: "John Smith",
            subject: "Computer Science",
            maxLimit: 50,
            minLimit: 20,
            currentFill: 40,
          },
          {
            title: "Block 2",
            startTime: new Date("2022-02-01T10:00:00"),
            duration: 3,
            umcsYear: "3",
            comment: "Advanced Algorithms",
            classroom: 102,
            lecturer: "Jane Doe",
            subject: "Computer Science",
            maxLimit: 30,
            minLimit: 15,
            currentFill: 25,
          },
          {
            title: "Block 3",
            startTime: new Date("2022-02-01T13:00:00"),
            duration: 2,
            umcsYear: "4",
            comment: "Machine Learning",
            classroom: 103,
            lecturer: "Bob Johnson",
            subject: "Computer Science",
            maxLimit: 40,
            minLimit: 20,
            currentFill: 35,
          },
          {
            title: "Block 4",
            startTime: new Date("2022-02-01T15:00:00"),
            duration: 1,
            umcsYear: "2",
            comment: "Introduction to Database",
            classroom: 104,
            lecturer: "Emily Brown",
            subject: "Computer Science",
            maxLimit: 35,
            minLimit: 15,
            currentFill: 30,
          },
          {
            title: "Block 5",
            startTime: new Date("2022-02-01T16:00:00"),
            duration: 2,
            umcsYear: "3",
            comment: "Web Development",
            classroom: 105,
            lecturer: "Michael Garcia",
            subject: "Computer Science",
            maxLimit: 50,
            minLimit: 25,
            currentFill: 45,
          },
        ],
      },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
  {
    id: "2",
    title: "Workshop",
    startTime: new Date("2022-06-10T10:00:00Z"),
    endTime: new Date("2022-06-11T16:00:00Z"),
    yearName: "Informatyka 2022",
    groups: [
      { id: "1", name: "Group A", blocks: [] },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
  {
    id: "3",
    title: "Seminar",
    startTime: new Date("2022-07-15T08:00:00Z"),
    endTime: new Date("2022-07-15T12:00:00Z"),
    yearName: "Informatyka 2022",
    groups: [
      { id: "1", name: "Group A", blocks: [] },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
  {
    id: "4",
    title: "Meetup",
    startTime: new Date("2022-08-20T18:00:00Z"),
    endTime: new Date("2022-08-20T20:00:00Z"),
    yearName: "Informatyka 2022",
    groups: [
      { id: "1", name: "Group A", blocks: [] },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
  {
    id: "5",
    title: "Webinar",
    startTime: new Date("2022-09-25T19:00:00Z"),
    endTime: new Date("2022-09-25T21:00:00Z"),
    yearName: "Informatyka 2022",
    groups: [
      { id: "1", name: "Group A", blocks: [] },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
]);
export const activeRegistrations$ = activeRegistrations.asObservable();

const upcomingRegistrations = new BehaviorSubject<RegistrationData[]>([
  {
    id: "6",
    title: "Conference",
    startTime: new Date("2022-10-01T09:00:00Z"),
    endTime: new Date("2022-10-03T17:00:00Z"),
    yearName: "Informatyka 2022",
    groups: [
      { id: "1", name: "Group A", blocks: [] },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
  {
    id: "7",
    title: "Workshop",
    startTime: new Date("2022-11-10T10:00:00Z"),
    endTime: new Date("2022-11-11T16:00:00Z"),
    yearName: "Informatyka 2022",
    groups: [
      { id: "1", name: "Group A", blocks: [] },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
  {
    id: "8",
    title: "Seminar",
    startTime: new Date("2022-12-15T08:00:00Z"),
    endTime: new Date("2022-12-15T12:00:00Z"),
    yearName: "Informatyka 2022",
    groups: [
      { id: "1", name: "Group A", blocks: [] },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
  {
    id: "9",
    title: "Meetup",
    startTime: new Date("2023-01-20T18:00:00Z"),
    endTime: new Date("2023-01-20T20:00:00Z"),
    yearName: "Informatyka 2023",
    groups: [
      { id: "1", name: "Group A", blocks: [] },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
  {
    id: "10",
    title: "Webinar",
    startTime: new Date("2023-02-25T19:00:00Z"),
    endTime: new Date("2023-02-25T21:00:00Z"),
    yearName: "Informatyka 2023",
    groups: [
      { id: "1", name: "Group A", blocks: [] },

      { id: "2", name: "Group B", blocks: [] },

      { id: "3", name: "Group C", blocks: [] },

      { id: "4", name: "Group D", blocks: [] },

      { id: "5", name: "Group E", blocks: [] },

      { id: "6", name: "Group F", blocks: [] },

      { id: "7", name: "Group G", blocks: [] },

      { id: "8", name: "Group H", blocks: [] },

      { id: "9", name: "Group I", blocks: [] },

      { id: "10", name: "Group J", blocks: [] },
    ],
  },
]);
export const upcomingRegistrations$ = upcomingRegistrations.asObservable();

const selectedRegistration = new BehaviorSubject<RegistrationData | null>(null);
export const selectedRegistration$ = selectedRegistration.asObservable();

const selectedRegistrationGroup =
  new BehaviorSubject<RegistrationGroupData | null>(null);
export const selectedRegistrationGroup$ =
  selectedRegistrationGroup.asObservable();

export const changeSelectedRegistration = (
  registration: RegistrationData | null
) => {
  changeSelectedRegistrationGroup(null);
  selectedRegistration.next(registration);
};

export const changeSelectedRegistrationGroup = (
  registrationGroup: RegistrationGroupData | null
) => {
  selectedRegistrationGroup.next(registrationGroup);
};
