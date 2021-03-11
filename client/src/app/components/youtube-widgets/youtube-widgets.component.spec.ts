import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeWidgetsComponent } from './youtube-widgets.component';

describe('YoutubeWidgetsComponent', () => {
  let component: YoutubeWidgetsComponent;
  let fixture: ComponentFixture<YoutubeWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
