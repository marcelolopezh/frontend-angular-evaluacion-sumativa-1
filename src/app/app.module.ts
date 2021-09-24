import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HomeComponent } from './compartida/home/home.component';
import { ErrorComponent } from './compartida/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    CategoriasComponent,
    ProductosComponent,
    LoginComponent,
    RegistroComponent,
    CarruselComponent,
    BuscadorComponent,
    HomeComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
