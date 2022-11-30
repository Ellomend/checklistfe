export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface CheckListDto {
  id: string;
  name: string;
  tasks: TaskDto[];
  user: UserDto;
}

export interface TaskDto {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  order: number;
}

export interface UserDto {
  id: string;
  email: string;
  password?: string;
}
