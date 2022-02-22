import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner-best',
  templateUrl: './banner-best.component.html',
  styleUrls: ['./banner-best.component.css'],
})
export class BannerBestComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef }) widgetsContent: ElementRef;
  rightDisabled: boolean = false;
  leftDisabled: boolean = true;
  constructor(private config: NgbCarouselConfig) {}
  images = [
    {
      id:1,
      title: 'Vestel',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://awmedu.com/wp-content/uploads/2016/08/bmw-cars-logo-emblem-200x200.jpg',
    },
    {
      id:2,
      title: 'Arçelik',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://www.playnetwork.com/wp-content/uploads/2018/12/Nike-Logo-200x200.png',
    },
    {
      id:3,
      title: 'Beko',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://www.burhantec.com/wp-content/uploads/2017/12/dell-logo-preview-200x200.png',
    },
    {
      id:4,
      title: 'Bellona',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://digitalsignagesummit.org/europe/wp-content/uploads/2017/05/200x200-ex-samsung-logo.png',
    },
    {
      id:5,
      title: 'Beko',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://www.burhantec.com/wp-content/uploads/2017/12/dell-logo-preview-200x200.png',
    },
    {
      id:6,
      title: 'Bellona',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://digitalsignagesummit.org/europe/wp-content/uploads/2017/05/200x200-ex-samsung-logo.png',
    },
    {
      id:7,
      title: 'Beko',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://www.burhantec.com/wp-content/uploads/2017/12/dell-logo-preview-200x200.png',
    },
    {
      id:8,
      title: 'Bellona',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://digitalsignagesummit.org/europe/wp-content/uploads/2017/05/200x200-ex-samsung-logo.png',
    },
    {
      id:9,
      title: 'Beko',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://www.burhantec.com/wp-content/uploads/2017/12/dell-logo-preview-200x200.png',
    },
    {
      id:10,
      title: 'Bellona',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://digitalsignagesummit.org/europe/wp-content/uploads/2017/05/200x200-ex-samsung-logo.png',
    },
    {
      id:11,
      title: 'Beko',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://www.burhantec.com/wp-content/uploads/2017/12/dell-logo-preview-200x200.png',
    },
    {
      id:12,
      title: 'Bellona',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://digitalsignagesummit.org/europe/wp-content/uploads/2017/05/200x200-ex-samsung-logo.png',
    },
    {
      id:13,
      title: 'Beko',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://www.burhantec.com/wp-content/uploads/2017/12/dell-logo-preview-200x200.png',
    },
    {
      id:14,
      title: 'Bellona',
      description:
        "Yep yeni özellikleri ve zarif tasarımı ile vestel akıllı tv scoope'a geliyor",
      src: 'https://digitalsignagesummit.org/europe/wp-content/uploads/2017/05/200x200-ex-samsung-logo.png',
    },
  ];
  ngOnInit() {
    this.config.interval = 1000;
    this.config.keyboard = true;
    this.config.pauseOnHover = true;
    
  }
  scrollLeft(): void {
    let scrollValue = this.widgetsContent.nativeElement.scrollLeft - 200;
    var doc = document.getElementById('bestStory') as HTMLElement; 
    doc.scrollTo({
      left: scrollValue,
      behavior: 'smooth'
    });
    this.checkScroll();
  }

  scrollRight(): void {
    let scrollValue = this.widgetsContent.nativeElement.scrollLeft + 200;
    var doc = document.getElementById('bestStory') as HTMLElement; 
    doc.scrollTo({
      left: scrollValue,
      behavior: 'smooth'
    });
    this.checkScroll();
  }
  onScroll(e: any) {
    this.checkScroll();
  }

  checkScroll() {
    this.widgetsContent.nativeElement.scrollLeft == 0
      ? (this.leftDisabled = true)
      : (this.leftDisabled = false);

    let newScrollLeft = this.widgetsContent.nativeElement.scrollLeft;
    let width = this.widgetsContent.nativeElement.clientWidth;
    let scrollWidth = this.widgetsContent.nativeElement.scrollWidth;
    scrollWidth - (newScrollLeft + width) == 0
      ? (this.rightDisabled = true)
      : (this.rightDisabled = false);
  }
}
