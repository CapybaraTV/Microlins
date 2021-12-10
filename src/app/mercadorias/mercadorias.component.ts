import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {
  title = "Lista de Compras";
  mercadorias = [
    {
      id:1,
    descricao:"Arroz",
    quantidadeEstoque:1,
    quantidadeMinima:2
    },
    {
      id:2,
      descricao:"Feijao",
      quantidadeEstoque:5,
      quantidadeMinima:3
    },
    {
      id:3,
      descricao:"Oleo",
      quantidadeEstoque:2,
      quantidadeMinima:2
    }
]

novaMercadoria = {
  id:4,
  
}
  constructor() { }

  ngOnInit() {
  }

}