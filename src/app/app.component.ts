import { Component, VERSION } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, DocumentList } from '../db/db';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App One con Angular';
  documentLists$ = liveQuery(() => db.documentLists.toArray());
  async resetDatabase() {
    await db.resetDatabase();
  }

  identifyList(index: number, list: DocumentList) {
    return `${list.id}${list.title}`;
  }
}
