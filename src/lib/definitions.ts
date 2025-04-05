export type User = {
  id: string;
  name: string | null;
  email: string;
  role: string;
  image: string | null;
};

export type Session = {
  user: User;
};
