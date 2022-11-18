import { CARD_SIDE } from 'components/Common/Card';

export interface Form {
  type: CARD_SIDE;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  value: number;
  shelterID: number;
}
