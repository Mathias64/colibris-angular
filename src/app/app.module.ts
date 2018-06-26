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
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SeriesService } from './services/series.service';
import { AuthService } from './services/auth.service';
import { UtilisateursService } from './services/utilisateurs.service';
import { FiltreISBNPipe } from './creation-serie/filtre-isbn.pipe';
import { FiltreSeriesPipe } from './liste-series/filtre-series.pipe';
import { CreationSerieComponent } from './creation-serie/creation-serie.component';
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
        FiltreISBNPipe,
        FiltreSeriesPipe,
        CreationSerieComponent,
        // UtilisateurEditeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        SeriesService,
        AuthService,
        UtilisateursService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
