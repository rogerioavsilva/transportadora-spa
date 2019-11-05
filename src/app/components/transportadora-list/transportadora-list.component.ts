import { TransportadoraService } from './../../services/transportadora.service';
import { Transportadora } from './../../models/transportadora';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportadora-list',
  templateUrl: './transportadora-list.component.html',
  styleUrls: ['./transportadora-list.component.css']
})
export class TransportadoraListComponent implements OnInit {

  transportadoraList: Observable<Transportadora[]>;

  constructor(private service: TransportadoraService) { }

  ngOnInit() {
    this.transportadoraList = this.service.listarTransportadoras();
  }

}
