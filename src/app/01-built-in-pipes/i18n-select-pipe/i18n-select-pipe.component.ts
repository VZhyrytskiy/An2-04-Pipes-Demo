import { I18nSelectPipe, NgForOf } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-select-pipe',
  standalone: true,
  templateUrl: './i18n-select-pipe.component.html',
  imports: [NgForOf, I18nSelectPipe]
})
export class I18nSelectPipeComponent implements OnInit {
  gender = 'male';
  keys!: string[];
  inviteMap = {
    male: 'Invite him.',
    female: 'Invite her.',
    other: 'Invite them.'
  };

  ngOnInit(): void {
    this.getKeys();
  }

  onSetGender(event: Event): void {
    this.gender = (event.target as HTMLSelectElement).value;
  }

  private getKeys(): void {
    this.keys = Object.keys(this.inviteMap);
  }
}
