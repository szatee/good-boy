export interface Form {
  type?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  value: number | null;
  customValue?: string | number;
  shelterID?: string | number;
}
