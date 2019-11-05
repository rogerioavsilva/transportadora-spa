export class Transportadora {
  id: number;
  email: string;
  nome: string;
  empresa: string;
  telefone: string;
  celular: string;
  whatsapp: string;
  modal: string;
  cep: number;
  UF: string;
  cidade: string;
  bairro: string;
  endereco: string;
  numeroEndereco: number;
  imagemUrl: string;

  public constructor(init?: Partial<Transportadora>) {
    Object.assign(this, init);
  }
}
