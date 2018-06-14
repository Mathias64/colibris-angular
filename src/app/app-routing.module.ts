import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { ListeSeriesComponent }     from './liste-series/liste-series.component';
import { SerieEditeComponent }      from './serie-edite/serie-edite.component';
import { RequetesComponent }        from './requetes/requetes.component';
import { ConnexionComponent }       from './connexion/connexion.component';
import { Erreur404Component }       from './erreur404/erreur404.component';
import { UtilisateursComponent }    from './utilisateurs/utilisateurs.component';
import { RechercheComponent }       from './recherche/recherche.component';
import { CreationSerieComponent }   from './creation-serie/creation-serie.component';

const appRoutes: Routes = [
    { path: '',             component: ListeSeriesComponent },
    { path: 'recherche',    component: RechercheComponent },
    { path: 'series',       component: ListeSeriesComponent },
    { path: 'series/:id',   component: SerieEditeComponent },
    { path: 'requetes',     component: RequetesComponent, data: { title: 'Gestion des demandes' } },
    { path: 'creaSerie',    component: CreationSerieComponent },
    { path: 'utilisateurs', component: UtilisateursComponent },
    { path: 'connexion',    component: ConnexionComponent },
    { path: '**',           component: Erreur404Component },
    { path: 'connexion',    component: ConnexionComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }