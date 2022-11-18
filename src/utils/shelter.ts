import { Shelter } from 'models/shelter';

export const findShelterByID = (id: number, shelters: Shelter[]): any => {
  if (shelters && id) {
    const shelter = shelters.find((shelter: Shelter) => shelter.id === id);
    return shelter;
  }
};
