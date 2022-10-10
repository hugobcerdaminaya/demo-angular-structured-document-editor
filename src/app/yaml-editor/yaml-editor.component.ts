import { Component, OnInit } from '@angular/core';
import { db } from 'src/db/db';
@Component({
  selector: 'app-yaml-editor',
  templateUrl: './yaml-editor.component.html',
  styleUrls: ['./yaml-editor.component.css']
})
export class YamlEditorComponent implements OnInit {

  async addDocument() {
    await db.documentLists.add({
      title: this.documentName,
    });
  }

  documentName = 'Escribe un esquema YAML';
  constructor() { }

  ngOnInit(): void {
  }

}
