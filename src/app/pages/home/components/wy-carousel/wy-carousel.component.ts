import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex = 0;

  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();

  @ViewChild('dot') dotRef: ElementRef<any>;
  
  constructor() { }

  ngOnInit() {
  }

  onChangeSlide(type: 'pre' | 'next'){
    this.changeSlide.emit(type);
  }
}
