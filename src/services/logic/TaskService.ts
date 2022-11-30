import {TasksApiService} from 'src/services/api/TasksApiService/TasksApiService';
import {TaskDto} from 'src/types/models';

export class TaskService {
  public static async getTasks(checklistId: string) {
    return await TasksApiService.getTasks(checklistId);
  }

  public static async createTask(checklistId: string, task: TaskDto) {
    return await TasksApiService.createTask(checklistId, task);
  }

  public static async updateTask(taskId: string, task: TaskDto) {
    return await TasksApiService.updateTask(taskId, task);
  }

  public static async deleteTask(taskId: string) {
    return await TasksApiService.deleteTask(taskId);
  }

  public static async reorderTasks(checklistId: string, tasks: string[]) {
    return await TasksApiService.reorderTasks(checklistId, tasks);
  }

  public static async toggleTaskCompletion(checklistId: string, taskId: string) {
    return await TasksApiService.toggleTaskCompletion(checklistId, taskId);
  }
}
