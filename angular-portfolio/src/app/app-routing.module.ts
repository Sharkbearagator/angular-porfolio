import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-me', component: ContactMeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
