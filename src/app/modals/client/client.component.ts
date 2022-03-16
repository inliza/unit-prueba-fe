import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientModel } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public Client: ClientModel;
  public phone = "";
  public maxDate = new Date();
  public selectSex = new FormControl("", [Validators.required]);
  public sexList = [{ value: "m", name: "Masculino" }, { value: "f", name: "Femenino" }];
  public Editing = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<ClientComponent>
  ) { }

  ngOnInit(): void {
    this.Client = new ClientModel();
    if (this.data.ClientId !== null) {
      this.Editing = true;
      this.getClient(this.data.ClientId);
    }
  }

  public addPhone() {
    if (this.phone == "")
      return;
    const exist = this.Client.phones.find(x => x === this.phone);
    if (exist) {
      alert("Este teléfono ya existe, por favor seleccione otro");
      return;
    }

    this.Client.phones.push(this.phone);
    this.phone = "";
  }

  public removePhone(phone: string) {
    const index = this.Client.phones.indexOf(phone);
    if (index > -1) {
      this.Client.phones.splice(index, 1);
    }
  }
  addOrUpdate() {
    if (this.Client.phones.length === 0 && this.phone.length > 0)
      this.Client.phones.push(this.phone);
    if (this.Client.phones.length === 0) {
      alert('Para continuar el cliente debe tener al menos 1 numero de telefono agregado');
      return;
    }
    if (!this.Editing)
      this.save();
    else this.update();
  }

  public update() {
    this.clientService.put(this.Client).subscribe((data: any) => {
      alert("Cliente actualizado correctamente");
      this.dialogRef.close("Ok");
    }, (error) => {
      console.log(error);
      alert("Ha ocurrido un error");
    })
  }

  public save() {
    this.clientService.post(this.Client).subscribe((data: any) => {
      alert("Cliente guardado correctamente");
      this.dialogRef.close("Ok");
    }, (error) => {
      console.log(error);
      alert(error.error.message);
    })
  }

  public getClient(id: number) {
    this.clientService.getById(id).subscribe((data: any) => {
      this.Client = data.data;
    })
  }
}
