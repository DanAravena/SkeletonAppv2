import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { AppRoutingModule } from '../app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      providers: [SQLite],
    });
    TestBed.configureTestingModule({
      imports: [AppRoutingModule]
    });
    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
