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

  rePositionInfo() {
    document.querySelectorAll<HTMLElement>('div.online-contact').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        let wrapper = el.querySelector<HTMLElement>('.online-contact-detail');
        if (wrapper === null)
          return;
        console.log(el.getBoundingClientRect().top)
        console.log(window.innerHeight)
        if (el.getBoundingClientRect().top+100 >= window.innerHeight){
          console.log("hi")
        }
        wrapper.style.top = String(el?.getBoundingClientRect().top -100  )+ "px";
      })
    })
  }

  ngOnInit(): void {
    this.rePositionInfo();
    OverlayScrollbars(document.querySelector('.online-contacts') as HTMLElement, {
      paddingAbsolute: false,
      showNativeOverlaidScrollbars: false,
      update: {
        elementEvents: [['img', 'load']],
        debounce: [0, 33],
        attributes: null,
        ignoreMutation: null,
      },
      overflow: {
        x: 'scroll',
        y: 'scroll',
      },
      scrollbars: {
        theme: 'os-theme-dark',
        visibility: 'auto',
        autoHide: 'leave',
        autoHideDelay: 400,
        dragScroll: true,
        clickScroll: true,
        pointers: ['mouse', 'touch', 'pen'],
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
