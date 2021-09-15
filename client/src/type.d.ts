interface IItem {
  _id: number;
  text: string;
}
type ItemState = {
  loading: boolean;
  error: any;
  entities: IItem[];
};

type ItemAction = {
  type: string;
  payload?: any;
};

type DispatchType = (args: ArticleAction) => ArticleAction;

// auth
interface IAuthState {
  loading: boolean;
  error: any;
  user: any;
  isAuthenticated: boolean;
  token: string | null;
}

type AuthAction = {
  type: string;
  payload?: any;
};

//
interface IUser {
  name?: string;
  email: string;
  password: string;
}
