import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-plural-pipe',
  templateUrl: './i18n-plural-pipe.component.html',
  styleUrls: ['./i18n-plural-pipe.component.css']
})
export class I18nPluralPipeComponent {

  messages: string[] = [];
  messageMapping: {[k: string]: string} =
  {
    '=0': 'No messages.',
    '=1': 'One message.',
    'other': '# messages.'
  };

  add(): void {
    this.messages.push(`Message ${this.messages.length + 1}`);
  }
}
