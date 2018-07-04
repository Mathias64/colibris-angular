import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListeSeriesComponent } from './liste-series/liste-series.component';
import { RequetesComponent } from './requetes/requetes.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { SerieEditeComponent } from './serie-edite/serie-edite.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SeriesService } from './services/series.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UtilisateursService } from './services/utilisateurs.service';
import { TitreSeriesPipe } from './liste-series/titre-series.pipe';
import { FiltreIsbnPipe } from './creation-serie/filtre-isbn.pipe';
import { NiveauxSeriesPipe } from './liste-series/niveaux-series.pipe';
import { RechercheComponent } from './recherche/recherche.component';
import { CreationSerieComponent } from './creation-serie/creation-serie.component';
import { ExemplairesSeriesPipe, ExemplaireseditionsPipe } from './liste-series/exemplaires-series.pipe';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
// import { UtilisateurEditeComponent } from './utilisateur-edite/utilisateur-edite.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ListeSeriesComponent,
        RequetesComponent,
        Erreur404Component,
        SerieEditeComponent,
        ConnexionComponent,
        UtilisateursComponent,
        TitreSeriesPipe,
        FiltreIsbnPipe,
        NiveauxSeriesPipe,
        RechercheComponent,
        CreationSerieComponent,
        ExemplairesSeriesPipe,
        ExemplaireseditionsPipe,
        CheckboxComponent,
        CheckboxGroupComponent
        // UtilisateurEditeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        Title,
        SeriesService,
        TitreSeriesPipe,
        NiveauxSeriesPipe,
        AuthService,
        AuthGuard,
        UtilisateursService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
