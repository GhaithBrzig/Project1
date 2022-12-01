import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'User',  icon:'person', class: '' },
   // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
   //  { path: '/etudiant', title: 'Etudiant',  icon:'person', class: '' },
   //  { path: '/departement', title: 'Departement',  icon:'person', class: '' },
    { path: '/equipe', title: 'Equipe',  icon:'person', class: '' },
    { path: '/equipe/detailEquipe', title: 'DetailEquipe',  icon:'person', class: '' },
    // { path: '/contrat', title: 'Contrat',  icon:'content_paste', class: '' },
   // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
   // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
   // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
   // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
