import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {

  public database!: SQLiteObject;

  //create tables
  tablaUsuario: string = "CREATE TABLE IF NOT EXIST USUARIO( "+
                            "ID_USER INTEGER PRIMARY KEY AUTOINCREMENT, "+
                            "NOMBRE		  VARCHAR(40) NOT NULL, "+
                            "APELLIDO	  VARCHAR(40) NOT NULL, "+
                            "MAIL		    VARCHAR(100) NOT NULL, "+
                            "NIVEL_EDUC	VARCHAR(100) NOT NULL,"+
                            "FECHA_NAC	DATE "+
                            "CLAVE      VARCHAR(15) NOT NULL);"

  tablaNotas: string = "CREATE TABLE IF NOT EXIST NOTA( "+
                        "  ID_NOTA INTEGER PRIMARY KEY AUTOINCREMENT, "+
                        "  ID_USER INTEGER NOT NULL, "+
                        "  DETALLE VARCHAR(40) NOT NULL, "+
                        "  FOREIGN KEY (ID_USER) REFERENCES USUARIO(ID_USER));"

  //insert registers
  registrarUsuario: string = "INSERT INTO OR IGNORE USUARIO(NOMBRE, APELLIDO, MAIL, NIVEL_EDUC, FECHA_NAC, CLAVE) VALUES('Genoveva','villablanca', 'ge.villablanca@duocuc.cl', 'universitaria', '', '12345');"
  
 // registrarNota: string = "INSERT INTO "


  //observables
  
  constructor() { }
}
