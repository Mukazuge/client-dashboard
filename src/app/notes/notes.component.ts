import { Component, OnInit } from '@angular/core';

export enum Status {
  pending,
  completed,
  deleted
}

export interface Card {
  title: string;
  content: string;
  checked: boolean;
  status: Status;
  startDate: string;
}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  cards: Card[] = [
    {
      title: 'Reminder for 02-08-2020',
      content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
       totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
         consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
          qui dolorem ipsum quia dolor sit amet, consectetur`,
      checked: false,
      status: 0,
      startDate: '05-27-2020'
    },
    {
      title: 'I need to pay it ASAP',
      content: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
       was born and I will give you a complete account of the system, and expound the actual teachings of the
        great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes.`,
      checked: true,
      status: 2,
      startDate: '04-27-2020'
    },
    {
      title: 'Company birthDay on 12-12-2020',
      content: `Party hard!`,
      checked: false,
      status: 0,
      startDate: '08-27-2020'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
