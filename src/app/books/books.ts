export interface Book {
  id: number;
  autor: string;
  titulo: string;
  dar_criacao: Date;
  id_usuario_cadastro: number;
  ativo: number;
}

export type Books = Array<Book>;
