// export interface userData {
//   title: string;
//   body: string;
//   useId: string;
// }

// class HomeModal {
//   userData: Array<userData> = [];
// }

// export {HomeModal};

type Todo = {
  useId: string;
  title: string | undefined;
  body: string | undefined;
};

type TodosState = {
  list: Todo[];
};
type TodosUpdate = {
  index: number;
  updateData: Todo;
};

type coinsData = {
  id: string;
  symbol: string;
  name: string;
  platforms: {};
};

type coinsList = {
  coinlist: coinsData[];
  status: string;
};

export type {Todo, TodosState, TodosUpdate, coinsList, coinsData};
