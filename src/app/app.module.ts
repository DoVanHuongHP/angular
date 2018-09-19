import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { WordComponet } from './word/word.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructComponent } from './struct/struct.component';

import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { IPserviceComponent } from './ipservice/ipservice.component';
import { WeatherComponent } from './weather/weather.component';

import { TempweatherComponent } from './tempweather/tempweather.component';
import { FormComponent } from './form/form.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    WordComponet,
    TestComponent,
    StructComponent,
    ParentComponent,
    ChildComponent,
    IPserviceComponent,
    WeatherComponent,
    TempweatherComponent,
    FormComponent,
    FormReactiveComponent,
    LoginComponent,
    ProjectComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgxPaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
