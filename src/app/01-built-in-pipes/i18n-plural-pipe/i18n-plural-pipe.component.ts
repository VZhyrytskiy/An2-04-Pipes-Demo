import { I18nPluralPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-plural-pipe',
  standalone: true,
  templateUrl: './i18n-plural-pipe.component.html',
  imports: [I18nPluralPipe, NgForOf]
})
export class I18nPluralPipeComponent {
  messages: string[] = [];
  messageMapping: { [key: string]: string } = {
    '=0': 'No messages.',
    '=1': 'One message.',
    other: '# messages.'
  };

  onAdd(): void {
    this.messages.push(`Message ${this.messages.length + 1}`);
  }
}
