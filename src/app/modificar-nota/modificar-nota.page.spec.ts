import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarNotaPage } from './modificar-nota.page';
import { AppRoutingModule } from '../app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ModificarNotaPage', () => {
  let component: ModificarNotaPage;
  let fixture: ComponentFixture<ModificarNotaPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      providers: [SQLite],
    });
    fixture = TestBed.createComponent(ModificarNotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
