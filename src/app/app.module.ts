import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RestarauntDetailsComponent } from './restaraunt-details/restaraunt-details.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { ReviewComponent } from './restaurant-review/restaurant-review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { RestaurantAddReviewComponent } from './restaurant-add-review/restaurant-add-review.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// Імпортуйте ваші компоненти

@NgModule({
  declarations: [
    // Оголошення компонентів
    RestaurantFormComponent,
    RestaurantListComponent,
    RestarauntDetailsComponent,
    ReviewComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
  ],
  providers: [
    // Сервіси та інші залежності
  ],
  bootstrap: [
    // Кореневий компонент, який ініціалізується при запуску додатку
    RestaurantListComponent,
    RestaurantFormComponent,
    LanguageSelectorComponent,
    RestaurantAddReviewComponent,
  ],
})
export class AppModule {}
