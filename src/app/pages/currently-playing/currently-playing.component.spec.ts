import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrentlyPlayingComponent } from './currently-playing.component';

describe('CurrentlyPlayingComponent', () => {
  let component: CurrentlyPlayingComponent;
  let fixture: ComponentFixture<CurrentlyPlayingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CurrentlyPlayingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentlyPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});