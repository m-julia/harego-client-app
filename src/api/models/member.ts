import { Advertisement } from "./advertisement";

export interface Member {
    firstName: string;
    lastName: string;
    birthday: string;
    phoneNumber: string;
    email: string;
    createdAt: string;
    deletedAt: any;
    lastVisitDate: string;
    advertisements: Advertisement[];
    memberLanguage: any[];
    memberLocation: any[];
    createdReviews: any[];
    receivedReviews: any[];
    id: string;
  }
  