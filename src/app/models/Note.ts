enum Status {
  pending,
  completed,
  deleted
}

export interface Note {
  title: string;
  content: string;
  checked: boolean;
  status: Status;
  startDate: string;
}
