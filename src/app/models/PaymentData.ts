enum Status {
  done,
  pending,
  declined
}

enum BusinessTravel {
  businessTravel,
  food,
  gas,
  officeServices,
  joby
}

export interface PaymentData {
  date: string,
  service: BusinessTravel;
  status: Status;
  nextPaymentDate: string;
  amount: number;
  currency: string;
}
