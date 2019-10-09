import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class SqLiteService {

  databaseObj: SQLiteObject;
  name_model: string = "";
  row_data: any = [];
  readonly database_name: string = "fasto.db";
  readonly table_name_customers: string = "customers";
  readonly table_name_products: string = "products";
  constructor(public sqlite: SQLite) { }

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.createTable_customers();
      this.createTable_products();
    }).catch(e => {
      console.log("error " + JSON.stringify(e))
    });
  }

  openDB(): Promise<any> {
    return new Promise(resolve => {
      this.sqlite.create({
        name: this.database_name,
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.databaseObj = db;
        resolve('success');
      });
    });
  }

  createTable_customers() {
    this.databaseObj.executeSql('DROP TABLE IF EXISTS ' + this.table_name_customers);
    this.databaseObj.executeSql('CREATE TABLE ' + this.table_name_customers + ' (cid varchar(50), Name varchar(255))', []).then(() => { }).catch(e => {
      console.log("error " + JSON.stringify(e))
    });
  }

  insert_customers_Row(val: any, name: any) {
    this.databaseObj.executeSql('INSERT INTO ' + this.table_name_customers + ' VALUES (?,?)', [val, name])
      .then(() => { })
      .catch(e => {
        console.log("error " + JSON.stringify(e))
      });
  }

  createTable_products() {
    this.databaseObj.executeSql('DROP TABLE IF EXISTS ' + this.table_name_products);
    this.databaseObj.executeSql('CREATE TABLE ' + this.table_name_products + ' (pid varchar(30), Name varchar(255))', []).then(() => { }).catch(e => { console.log("error " + JSON.stringify(e)) });
  }


  insert_products_Row(val: any, name: any) {
    this.databaseObj.executeSql('INSERT INTO ' + this.table_name_products + ' VALUES (?,?)', [val, name])
      .then(() => {
        console.log('success');
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }

  getRows_customers(): Promise<any> {
    return new Promise(resolve => {
      this.databaseObj.executeSql("SELECT * FROM " + this.table_name_customers, [])
        .then((res) => {
          resolve(res);
        })
        .catch(e => {
          console.log("error " + JSON.stringify(e));
        });
    });
  }

  getRows_products(): Promise<any> {
    return new Promise(resolve => {
      this.databaseObj.executeSql("SELECT * FROM " + this.table_name_products, [])
        .then((res) => {
          resolve(res);
        })
        .catch(e => {
          console.log("error " + JSON.stringify(e));
        });
    });
  }

  getSearchRows_customers(val: any): Promise<any> {
    return new Promise(resolve => {
      this.databaseObj.executeSql("SELECT * FROM " + this.table_name_customers + " WHERE (Name LIKE ?)", ['%' + val + '%'])
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch(e => {
          console.log("error " + JSON.stringify(e));
        });
    });
  }

  getSearchRows_product(val: any): Promise<any> {
    return new Promise(resolve => {
      this.databaseObj.executeSql("SELECT * FROM " + this.table_name_products + " WHERE (Name LIKE ?)", ['%' + val + '%'])
        .then((res) => {
          console.log(res);
          resolve(res);
        })
        .catch(e => {
          console.log("error " + JSON.stringify(e));
        });
    });
  }

}
