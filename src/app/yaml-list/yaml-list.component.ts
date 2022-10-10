import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { db, DocumentList} from 'src/db/db';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-yaml-list',
  templateUrl: './yaml-list.component.html',
  styleUrls: ['./yaml-list.component.css']
})
export class YamlListComponent implements OnInit {
  documentLists$ = liveQuery(() => this.listDocuments());
  @Output() valueEdit = new EventEmitter();
  
  async listDocuments() {
    return await db.documentLists.toArray();
  }

  async editDocument(documentList:any) {
    await this.valueEdit.emit(documentList);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
