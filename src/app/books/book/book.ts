export interface Rent {
  id: number;
  id_usuario: number;
  id_livro: number;
  locacao: number;
  dt_locacao: Date;
  previsao_devolucao: Date;
  devolucao?: any;
  dt_devolucao?: any;
  status: string;
}
