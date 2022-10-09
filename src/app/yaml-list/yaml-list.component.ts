import { Component, OnInit, Input } from '@angular/core';
import { db, DocumentList, DocumentItem} from 'src/db/db';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-yaml-list',
  templateUrl: './yaml-list.component.html',
  styleUrls: ['./yaml-list.component.css']
})
export class YamlListComponent implements OnInit {
  @Input() documentList: any;
  documentItems$ = liveQuery(() => this.listTodoItems());
  async listTodoItems() {
    console.log(db.documentItems
      .where({
        documentListId: this.documentList.id,
      })
      .toArray());
    return await db.documentItems
      .where({
        documentListId: this.documentList.id,
      })
      .toArray();
  }

  async addDocument() {
    await db.documentItems.add({
      title: this.documentName,
      documentListId: this.documentList.id,
    });
  }

  documentName = 'Escribe un esquema YAML';
  constructor() { }

  ngOnInit(): void {
  }

}
