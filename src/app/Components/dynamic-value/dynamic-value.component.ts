import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-value',
  templateUrl: './dynamic-value.component.html',
  styleUrls: ['./dynamic-value.component.scss'],
})
export class DynamicValueComponent {
  @Input() name: string;
  
  constructor() { }

}
