import { Component, OnInit } from '@angular/core';
import {DOCUMENTS} from '../mock-documents'

@Component({
  selector: 'app-yaml-list',
  templateUrl: './yaml-list.component.html',
  styleUrls: ['./yaml-list.component.css']
})
export class YamlListComponent implements OnInit {
  title = 'Tabla de contenidos';
  documents = DOCUMENTS;
  //documents = //service to connect indexedb and retrieve all documents info
  constructor() { }

  ngOnInit(): void {
  }

}
