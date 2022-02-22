import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class IndexComponent implements OnInit {
  images = [
    {title: 'iPhone 12 Yakında Scoope\'da !',description:"Yep yeni özellikleri ve zarif tasarımı ile iPhone 13 scoope'a geliyor, ön sipariş için hemen sende yerini al!", src: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021_big.jpg.large.jpg"},
    {title: "Asus Laptop Scoope'da", description:"Yep yeni özellikleri ve zarif tasarımı ile Asus Laptop scoope'a geliyor, ön sipariş için hemen sende yerini al!", src: "https://images.hepsiburada.net/assets/Bilgisayar/X509JA-BR089T_files/finger1.jpg"},
    {title: "Çocuk giyim de şok fırsatlar!", description:"Çocuk giyiminde inanılmaz indirimler var!", src: "https://www.sibelincocukdunyasi.com/image/cache/catalog/cocuk-giyim-002-960x450w.jpg"}
  ];
  constructor(private config: NgbCarouselConfig) { }

  ngOnInit() {
    this.config.interval = 1000;
    this.config.keyboard = true;
    this.config.pauseOnHover = true;
  }

}
