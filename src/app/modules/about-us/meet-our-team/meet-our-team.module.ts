import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetOurTeamRoutingModule } from './meet-our-team-routing.module';
import { MeetOurTeamComponent } from './meet-our-team.component';


@NgModule({
  declarations: [
    MeetOurTeamComponent
  ],
  imports: [
    CommonModule,
    MeetOurTeamRoutingModule
  ]
})
export class MeetOurTeamModule { }
