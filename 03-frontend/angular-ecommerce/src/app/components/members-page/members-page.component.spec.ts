import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersPageComponent } from './members-page.component';

describe('MembersPageComponent', () => {
  let component: MembersPageComponent;
  let fixture: ComponentFixture<MembersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersPageComponent]
    });
    fixture = TestBed.createComponent(MembersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
