import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlListItemComponent } from './yaml-list-item.component';

describe('YamlListItemComponent', () => {
  let component: YamlListItemComponent;
  let fixture: ComponentFixture<YamlListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YamlListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamlListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
