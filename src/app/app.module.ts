import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YamlListComponent } from './yaml-list/yaml-list.component';
import { YamlListItemComponent } from './yaml-list-item/yaml-list-item.component';
import { FormsModule } from '@angular/forms';
import { YamlEditorComponent } from './yaml-editor/yaml-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    YamlListComponent,
    YamlListItemComponent,
    YamlEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
