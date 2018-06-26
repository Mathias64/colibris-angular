import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListeSeriesComponent } from './liste-series/liste-series.component';
import { SerieEditeComponent } from './serie-edite/serie-edite.component';
import { RequetesComponent } from './requetes/requetes.component';
import { CreationSerieComponent } from './creation-serie/creation-serie.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

const appRoutes: Routes = [
    { path: '', component: ListeSeriesComponent },
    { path: 'series', component: ListeSeriesComponent },
    { path: 'series/:id', component: SerieEditeComponent },
    { path: 'requetes', component: RequetesComponent},
    { path: 'creation-serie', component: CreationSerieComponent},
    { path: 'utilisateurs', component: UtilisateursComponent},
    { path: 'connexion', component: ConnexionComponent },
    { path: '**', component: Erreur404Component }
    // { path: 'connexion', component: ConnexionComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ],
    declarations:[]
  })
  export class AppRoutingModule { }