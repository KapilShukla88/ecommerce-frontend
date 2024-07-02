interface iUser {
  user_id?: null | number;
  first_name: null | string;
  last_name: null | string;
  user_name?: null | string;
  mobile_number: null | string;
  token: null | string;
  email: null | string;
  refresh_token: null | string;
  isLoggedIn: boolean;
  avatar?: string | null;
}
