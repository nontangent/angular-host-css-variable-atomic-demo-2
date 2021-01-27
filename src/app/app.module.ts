import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtomComponent } from './atom/atom.component';
import { MoleculeComponent } from './molecule/molecule.component';
import { OrganismComponent } from './organism/organism.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    AtomComponent,
    MoleculeComponent,
    OrganismComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
