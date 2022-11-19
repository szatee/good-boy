export interface Form {
  type?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  value?: number;
  customValue?: string | number;
  shelterID?: number | string;
}
