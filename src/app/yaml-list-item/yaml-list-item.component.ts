import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { db, DocumentList } from 'src/db/db';

@Component({
  selector: 'app-yaml-list-item',
  templateUrl: './yaml-list-item.component.html',
  styleUrls: ['./yaml-list-item.component.css']
})
export class YamlListItemComponent implements OnInit {
  list_item = "This is list item component";
  @Input() document: any;
  @Output() valueEdit = new EventEmitter();
  constructor() { }

  async editDocument(document:any) {
    await this.valueEdit.emit(document);
  }

  async deleteDocument(document:any) {
    await db.documentLists.delete(document.id);
  }

  ngOnInit(): void {
  }

}
