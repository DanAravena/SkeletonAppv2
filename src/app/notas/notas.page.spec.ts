import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotasPage } from './notas.page';
import { AppRoutingModule } from '../app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('NotasPage', () => {
  let component: NotasPage;
  let fixture: ComponentFixture<NotasPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      providers: [SQLite],
    });
    fixture = TestBed.createComponent(NotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
