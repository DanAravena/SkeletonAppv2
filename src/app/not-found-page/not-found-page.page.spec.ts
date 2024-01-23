import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundPagePage } from './not-found-page.page';
import { AppRoutingModule } from '../app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('NotFoundPagePage', () => {
  let component: NotFoundPagePage;
  let fixture: ComponentFixture<NotFoundPagePage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      providers: [SQLite],
    });
    fixture = TestBed.createComponent(NotFoundPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
