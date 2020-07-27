import { Component, OnInit } from '@angular/core';

export interface Client {
  id: number;
  name: string;
  industry: string;
  status: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'industry', 'status', 'startDate', 'endDate'];
  clients: Client[] = [
    {
      id: 1,
      name: 'john',
      industry: 'sales',
      status: 'active',
      startDate: '01-01-2018',
      endDate: 'N/A'
    },
    {
      id: 2,
      name: 'Steve',
      industry: 'IT services',
      status: 'active',
      startDate: '06-06-2019',
      endDate: 'N/A'
    },
    {
      id: 3,
      name: 'Carlos',
      industry: 'sales',
      status: 'active',
      startDate: '01-01-2020',
      endDate: 'N/A'
    },
    {
      id: 4,
      name: 'Shawn',
      industry: 'sports',
      status: 'active',
      startDate: '01-04-2018',
      endDate: 'N/A'
    },
    {
      id: 5,
      name: 'Tom',
      industry: 'broker',
      status: 'active',
      startDate: '01-01-2019',
      endDate: 'N/A'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
