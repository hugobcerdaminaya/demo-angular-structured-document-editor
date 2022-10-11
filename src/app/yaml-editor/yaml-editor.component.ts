import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { db } from 'src/db/db';
import Ajv, {JSONSchemaType} from "ajv"
const yaml = require('js-yaml');
const ajv = new Ajv();
  //AJV
  interface MyData {
    name: string
    email: string
    password: string
  }
  
  const schema: JSONSchemaType<MyData> = {
    type: 'object',
    properties:{
      name: {type:'string'},
      email: {type:'string'},
      password: {type:'string'}
    },
    required: ["name","email",'password'],
    additionalProperties: false
  }
  const holder = 
  `Escribe un yaml Schema válido, con la siguiente estructura:
    name: string
    email: string
    password: string
  `;
  
   
  

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
      this.documentName = "";
      this.somePlaceholder = holder;
      this.disabled=true;
    }else{
      await db.documentLists.update(this.documentId,{
        title: this.documentName,
      });
      this.documentId=null;
      this.update=false;
      this.documentName = "";
      this.somePlaceholder = holder;
      this.disabled=true;
    }
    
  }

  validateYaml(){
    const textarea = document.getElementById("name");
    textarea?.addEventListener("input", (e:any)=>{
      const text=e.target.value
      try{
        let jsobj = yaml.load(text.trim())
        let validate = ajv.compile(schema)
        let valid = validate(jsobj)
        if (!valid) {
          e.target.style.borderColor = "red"
          this.disabled=true;
        }else {
          e.target.style.borderColor = "green"
          this.disabled=false;
        }
    
      }catch(err){
        console.log("schema is not a yaml file")
      }
    })
  }
  documentName="";
  disabled=true;
  somePlaceholder = holder;
  constructor() { }

  ngOnInit(): void {
  }

}
