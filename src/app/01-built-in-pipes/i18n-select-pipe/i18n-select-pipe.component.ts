import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-select-pipe',
  templateUrl: './i18n-select-pipe.component.html'
})
export class I18nSelectPipeComponent implements OnInit {
  gender = 'male';
  keys: string[];
  inviteMap: any = {
    male: 'Invite him.',
    female: 'Invite her.',
    other: 'Invite them.'
  };

  ngOnInit() {
    this.getKeys();
  }

  onSetGender(event: any): void {
    console.log(event);
    this.gender = event.target.value;
  }

  private getKeys() {
    this.keys = Object.keys(this.inviteMap);
  }
}
