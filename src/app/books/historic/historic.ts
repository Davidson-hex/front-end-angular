export interface Historic {
  id: number;
  id_usuario: number;
  id_livro: number;
  locacao: string;
  dt_locacao: Date;
  previsao_devolucao: Date;
  devolucao: string;
  dt_devolucao: Date;
  status: string;
}

export type Historics = Array<Historic>;
