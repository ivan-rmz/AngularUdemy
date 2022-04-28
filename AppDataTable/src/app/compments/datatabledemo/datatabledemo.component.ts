import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { stringify } from 'querystring';
import { InfoAPI } from 'src/app/models/infoAPI.model';
import { DataService } from 'src/app/services/datatabledemo/data.service';

@Component({
  selector: 'app-datatabledemo',
  templateUrl: './datatabledemo.component.html',
  styleUrls: ['./datatabledemo.component.css']
})
export class DatatabledemoComponent implements OnInit {



  displayedColumns: string[] = ['API', 'Description', 'Link', 'Category', 'Cors'];
  dataSource = new MatTableDataSource<InfoAPI>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
        }
      }
    );
  }

  applyFilter(event: Event){
    let filterValue = (event.target as HTMLInputElement).value;
    if(typeof filterValue === 'string')
      this.dataSource.filter = filterValue!.trim().toLowerCase();
    }

}
