import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

export interface SideMenu {
  path: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  title = 'client-dashboard';
  menu: SideMenu[] = [
    {path: '/client-list', name: 'Client List', icon: 'person_pin'},
    {path: '/payments', name: 'Payments', icon: 'monetization_on'},
    {path: '/statistics', name: 'Statistics', icon: 'pie_chart'},
    {path: '/notes', name: 'Notes', icon: 'speaker_notes'}
  ];

  private readonly _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
