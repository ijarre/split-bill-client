export interface Item {
  item_id: number;
  transaction_id: number;
  item_name: string;
  item_price: number;
  createdAt: Date;
  updatedAt: Date;
  Transaction: Transaction;
  UserItem: UserItem[];
}

export interface Transaction {
  transaction_id: number;
  createdAt: Date;
  updatedAt: Date;
  Item: Item[];
  User: User[];
  slug: string;
}

export interface User {
  user_id: number;
  username: string;
  balance: number;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  UserItem: UserItem[];
  Transaction: Transaction[];
}

export interface UserItem {
  user_id: number;
  item_id: number;
  is_paying: boolean;
  is_sharing: boolean;
  createdAt: Date;
  updatedAt: Date;
  Item: Item;
  User: User;
}
