import { NgModule } from '@angular/core'
import { RouterModule,Routes } from '@angular/router'
import { ErrorComponent } from './compartida/error/error.component';
import { HomeComponent } from './compartida/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
const routes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', component: ErrorComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}