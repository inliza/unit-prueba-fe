import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client';
import { MatDialog } from '@angular/material/dialog';
import { ClientComponent } from '../modals/client/client.component';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public ClientList: ClientModel[] = [];

  constructor(
    private clientModal: MatDialog,
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  Modal(id: number) {
    const dialogRef = this.clientModal.open(ClientComponent, {
      height: "auto",
      width: '500px',
      maxWidth: '500px',
      maxHeight: '650px',
      data: { ClientId: id },
      disableClose: false
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result == "Ok")
          this.getAll();

      }
    });

  }

  getAll() {
    this.clientService.getAll().subscribe((data: any) => {
      this.ClientList = data.data;
    })
  }

  delete(id: number) {
    this.clientService.delete(id).subscribe((data: any) => {
      alert('Cliente eliminado correctamente');
      this.getAll();
    }, error => {
      console.log(error);
      alert("Ha ocurrido un error inesperado")
    })
  }
}
