import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YamlEditorComponent } from './yaml-editor/yaml-editor.component';
import { YamlListComponent } from './yaml-list/yaml-list.component';
import { YamlListItemComponent } from './yaml-list-item/yaml-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    YamlEditorComponent,
    YamlListComponent,
    YamlListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
