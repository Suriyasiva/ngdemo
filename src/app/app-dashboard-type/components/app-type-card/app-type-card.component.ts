import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-type-card',
  templateUrl: './app-type-card.component.html',
  styleUrls: ['./app-type-card.component.css'],
})
export class AppTypeCardComponent {
  @Input() appType: string = '';

  @Output() selectedTaskIndex = new EventEmitter();

  selectedType: any = null;

  handleCardClick(selectedCard: string) {
    this.selectedType = selectedCard;
    this.selectedTaskIndex.emit(selectedCard);
  }
}
