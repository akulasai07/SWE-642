import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {SurveyFormComponent} from "./survey-form/survey-form.component";
import {SurveyListComponent} from "./survey-list/survey-list.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'survey', component: SurveyFormComponent},
  {path: 'list-surveys', component: SurveyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
