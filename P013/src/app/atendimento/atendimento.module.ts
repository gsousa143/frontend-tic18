export interface Atendimento {
  username: string;
  senha: string;
  email: string;
  nome: string;
  telefone: string;
  endereco: string;
  dataNascimento: Date;
  servicos: string[];
  valor: number;
  observacoes: string;
  id?: string;
}