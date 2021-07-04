import { Advertisement } from "./advertisement";

export interface Member {
    firstName: string;
    lastName: string;
    birthday: string;
    phoneNumber: string;
    email: string;
    token: string;
    image?: string;
    createdAt?: string;
    deletedAt?: any;
    lastVisitDate?: string;
    advertisements: Advertisement[];
    memberLanguage: any[];
    memberLocation: any[];
    createdReviews: any[];
    receivedReviews: any[];
    id: string;
  }
  
export interface MemberFormValue {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  phoneNumber?: string;
  userName?: string; 
}
