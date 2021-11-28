import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import {CardComponent} from '../card/card.component';
import {MockUserService} from '../testing/mock-service.spec';
import {UserService} from '../shared/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComponent, CardComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ RouterModule ],
      providers: [
        HttpClientModule,
        {provide: UserService, useClass: MockUserService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
