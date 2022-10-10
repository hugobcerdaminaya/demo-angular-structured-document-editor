import { Component, VERSION } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../db/db';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App One con Angular';
  async resetDatabase() {
    await db.resetDatabase();
  }
}
