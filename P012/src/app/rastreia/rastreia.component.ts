import { Component, OnInit } from '@angular/core';
import { RastreiaService } from '../rastreia.service';

@Component({
  selector: 'app-rastreia',
  templateUrl: './rastreia.component.html',
  styleUrls: ['./rastreia.component.css']
})
export class RastreiaComponent implements OnInit {
  valores: any;
  status: string = '';

  constructor(private rastreiaService: RastreiaService) { }

  ngOnInit(): void {
    this.rastreiaService.mudancas$.subscribe(mudancas => {
      this.valores = mudancas;
      this.status = mudancas['status'];
    });
  }
}