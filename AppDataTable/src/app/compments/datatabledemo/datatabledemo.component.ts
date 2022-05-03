import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { stringify } from 'querystring';
import { InfoAPI } from 'src/app/models/infoAPI.model';
import { DataService } from 'src/app/services/datatabledemo/data.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-datatabledemo',
  templateUrl: './datatabledemo.component.html',
  styleUrls: ['./datatabledemo.component.css']
})
export class DatatabledemoComponent implements OnInit {

  displayedColumns: string[] = ['API', 'Description', 'Link', 'Category', 'Cors'];
  dataSource = new MatTableDataSource<InfoAPI>([]);
  _dataSource = new MatTableDataSource<InfoAPI>([]);
  clickedRows = new Set<InfoAPI>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) matSort! : MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;
    this.listar();
  }

  constructor(private _entriesService:DataService) { }

  ngOnInit(): void {
  }

  listar() {
    this._entriesService.getEntries().subscribe(
      response => {
        console.log(response);
        if(response.count >0){
          this.dataSource.data = response.entries;
          this._dataSource.data = response.entries;
        }
      }
    );
  }

  applyFilter(event: Event){
    let filterValue = (event.target as HTMLInputElement).value;
    if(filterValue != '')
      this.dataSource.data  = this.dataSource.data.filter(name => name.API.toLowerCase().indexOf(filterValue.trim().toLowerCase()) !== -1);
    if(filterValue === ''){
      this.dataSource.data = this._dataSource.data;
    }
  }
  
}
