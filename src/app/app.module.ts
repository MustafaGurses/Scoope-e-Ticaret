import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav/nav.component';
import {IndexComponent} from './components/index/banner/banner.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CompanysComponent } from './components/index/companys/companys.component';
import { VitrinComponent } from './components/index/vitrin/vitrin.component';
import { BannerBestComponent } from './components/index/banner-best/banner-best.component';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxEditorModule } from 'ngx-editor';
import { ToastrModule } from 'ngx-toastr';
import { SlickCarouselModule } from 'ngx-slick-carousel';
/*import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';*/
@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    IndexComponent,
    CompanysComponent,
    VitrinComponent,
    BannerBestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    FileUploadModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    NgbModule,
    IonicModule,
    SlickCarouselModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
