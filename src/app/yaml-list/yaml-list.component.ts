import { Component, OnInit, Input } from '@angular/core';
import { db, DocumentList} from 'src/db/db';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-yaml-list',
  templateUrl: './yaml-list.component.html',
  styleUrls: ['./yaml-list.component.css']
})
export class YamlListComponent implements OnInit {
  documentLists$ = liveQuery(() => this.listDocuments());
  async listDocuments() {
    return await db.documentLists.toArray();
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
