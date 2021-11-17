import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicProjectsComponent } from './music-projects.component';

describe('MusicProjectsComponent', () => {
  let component: MusicProjectsComponent;
  let fixture: ComponentFixture<MusicProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
