import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Documents } from '../document';

@Component({
  selector: 'app-yaml-editor',
  templateUrl: './yaml-editor.component.html',
  styleUrls: ['./yaml-editor.component.css']
})
export class YamlEditorComponent implements OnInit {
  editor = 'This is editor component';
  document: Documents = {
    id: 1,
    content: 'Contenido YAML',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
