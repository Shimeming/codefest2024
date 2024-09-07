export type UserInfo = {
  id: string;
  name: string;
  age: number;
  sex: string;
  district: string;
  motto?: string;
};

export type ActivityInfo = {
  id: string;
  image_url: string;
  date: Date;
  name: string;
};

export type GroupInfo = {
  name: string;
  owner: UserInfo;
  members: UserInfo[];
  waitingMembers: UserInfo[];
  activity: ActivityInfo;
}
