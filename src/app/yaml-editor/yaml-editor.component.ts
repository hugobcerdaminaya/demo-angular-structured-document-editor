import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { db } from 'src/db/db';
import Ajv, {JSONSchemaType} from "ajv"

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
  `Escribe un json Schema que cumpla con la siguiente estructura válida:
  {
    name: string
    email: string
    password: string
  }`;
  /*const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Core schema meta-schema",
    definitions: {
        schemaArray: {
            type: "array",
            minItems: 1,
            items: { $ref: "#" }
        },
        nonNegativeInteger: {
            type: "integer",
            minimum: 0
        },
        nonNegativeIntegerDefault0: {
            allOf: [
                { $ref: "#/definitions/nonNegativeInteger" },
                { default: 0 }
            ]
        },
        simpleTypes: {
            enum: [
                "array",
                "boolean",
                "integer",
                "null",
                "number",
                "object",
                "string"
            ]
        },
        stringArray: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
            default: []
        }
    },
    type: ["object", "boolean"],
    properties: {
        $id: {
            type: "string",
            format: "uri-reference"
        },
        $schema: {
            type: "string",
            format: "uri"
        },
        $ref: {
            type: "string",
            format: "uri-reference"
        },
        $comment: {
            type: "string"
        },
        title: {
            type: "string"
        },
        description: {
            type: "string"
        },
        default: true,
        readOnly: {
            type: "boolean",
            default: false
        },
        examples: {
            type: "array",
            items: true
        },
        multipleOf: {
            type: "number",
            exclusiveMinimum: 0
        },
        maximum: {
            type: "number"
        },
        exclusiveMaximum: {
            type: "number"
        },
        minimum: {
            type: "number"
        },
        exclusiveMinimum: {
            type: "number"
        },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: {
            type: "string",
            format: "regex"
        },
        additionalItems: { $ref: "#" },
        items: {
            anyOf: [
                { $ref: "#" },
                { $ref: "#/definitions/schemaArray" }
            ],
            default: true
        },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: {
            type: "boolean",
            default: false
        },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: {
            type: "object",
            additionalProperties: { $ref: "#" },
            default: {}
        },
        properties: {
            type: "object",
            additionalProperties: { $ref: "#" },
            default: {}
        },
        patternProperties: {
            type: "object",
            additionalProperties: { $ref: "#" },
            propertyNames: { format: "regex" },
            default: {}
        },
        dependencies: {
            type: "object",
            additionalProperties: {
                anyOf: [
                    { $ref: "#" },
                    { $ref: "#/definitions/stringArray" }
                ]
            }
        },
        propertyNames: { $ref: "#" },
        const: true,
        enum: {
            type: "array",
            items: true,
            minItems: 1,
            uniqueItems: true
        },
        type: {
            anyOf: [
                { $ref: "#/definitions/simpleTypes" },
                {
                    type: "array",
                    items: { $ref: "#/definitions/simpleTypes" },
                    minItems: 1,
                    uniqueItems: true
                }
            ]
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: {$ref: "#"},
        then: {$ref: "#"},
        else: {$ref: "#"},
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
    },
    default: true
  }*/
  

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
        var jsobj = JSON.parse(text.trim());
        var validate = ajv.compile(schema)
        var valid = validate(jsobj)
        if (!valid) {
          e.target.style.borderColor = "red"
          this.disabled=true;
        }else {
          e.target.style.borderColor = "green"
          this.disabled=false;
        }
    
      }catch(err){
        console.log("schema is not a json file")
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
