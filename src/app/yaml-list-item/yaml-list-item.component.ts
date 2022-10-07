import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yaml-list-item',
  templateUrl: './yaml-list-item.component.html',
  styleUrls: ['./yaml-list-item.component.css']
})
export class YamlListItemComponent implements OnInit {
  list_item = "This is list item component";
  constructor() { }

  ngOnInit(): void {
  }

}
