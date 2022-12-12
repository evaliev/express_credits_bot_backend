import { ApplicationStatusses } from 'src/enums';

export const initialApplication = {
  status: ApplicationStatusses.TERM_PAGE,
};

export const initialConditions = {
  amount: 5_000_000,
  term: 36,
};

export const initialOwnerInfo = {
  address: '',
  birthPlace: '',
  docDate: '',
  docIssuedBy: '',
  docNumber: '',
  firstName: '',
  middleName: '',
  secondName: '',
};

export const initialIndiInfo = {
  address: '',
  INN: '',
  name: '',
  tel: '',
};
