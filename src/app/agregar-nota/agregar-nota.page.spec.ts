import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarNotaPage } from './agregar-nota.page';
import { AppRoutingModule } from '../app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AgregarNotaPage', () => {
  let component: AgregarNotaPage;
  let fixture: ComponentFixture<AgregarNotaPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      providers: [SQLite],
    });
    fixture = TestBed.createComponent(AgregarNotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
