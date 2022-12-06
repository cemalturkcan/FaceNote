import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { OverlayScrollbars } from 'overlayscrollbars';
@Component({
  selector: 'app-message-main',
  templateUrl: './message-main.component.html',
  styleUrls: ['./message-main.component.css']
})
export class MessageMainComponent implements OnInit, OnChanges{


  constructor() {

  }

  func() {
    document.querySelectorAll<HTMLElement>('div.online-contact').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        let wrapper = el.querySelector<HTMLElement>('.online-contact-detail');
        if (wrapper != null) {
          wrapper.style.top = String(el?.getBoundingClientRect().top -75  )+ "px";
          console.log(el.getBoundingClientRect().top)
        }
      })
    })
  }

  ngOnInit(): void {
    this.func();
    OverlayScrollbars(document.querySelector('.online-contacts') as HTMLElement, {
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
