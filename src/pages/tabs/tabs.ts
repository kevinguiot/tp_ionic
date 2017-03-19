import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ExperiencePage } from '../experience/experience';
import { FormationPage } from '../formation/formation';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  home: any = HomePage;
    experience: any = ExperiencePage;
    formation: any = FormationPage;
  contact: any = ContactPage;

  
 // experience: any = ExperiencePage;
  //tab2Root: any = AboutPage;
 //tab3Root: any = ContactPage;

  constructor() {

  }
}
