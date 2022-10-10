import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { db } from 'src/db/db';
@Component({
  selector: 'app-yaml-editor',
  templateUrl: './yaml-editor.component.html',
  styleUrls: ['./yaml-editor.component.css']
})
export class YamlEditorComponent implements OnInit {
  @Output() valueEdit = new EventEmitter();
  documentId:any;
  update=false;
  async editDocument(documentList:any) {
    this.documentId = documentList.id;
    this.update=true;
    this.documentName = documentList.title;
    await this.documentName;
  }
  
  async addDocument() {
    if(!this.update){
      await db.documentLists.add({
        title: this.documentName,
      });
    }else{
      await db.documentLists.update(this.documentId,{
        title: this.documentName,
      });
      this.documentId=null;
      this.update=false;
      this.documentName = 'Escribe un esquema YAML';
    }
    
  }

  documentName = 'Escribe un esquema YAML';
  constructor() { }

  ngOnInit(): void {
  }

}
