import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlListComponent } from './yaml-list.component';

describe('YamlListComponent', () => {
  let component: YamlListComponent;
  let fixture: ComponentFixture<YamlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YamlListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
