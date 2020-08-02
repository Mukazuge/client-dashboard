import {Component, Input, OnInit} from '@angular/core';
import {Loadable} from '../../../loadable/loadable';

@Component({
  selector: 'app-loading-container',
  templateUrl: './loading-container.component.html',
  styleUrls: ['./loading-container.component.scss']
})
export class LoadingContainerComponent implements OnInit {
  @Input() loadable: Loadable;

  constructor() { }

  ngOnInit(): void {
  }

}
