import {ApiClientService} from 'src/services/api/ApiClientService/ApiClientService';
import {API_PREFIX} from 'src/config/endpoints';
import {TaskDto} from 'src/types/models';

export class TasksApiService {
  // get tasks for a checklist
  static async getTasks(checklistId: string): Promise<TaskDto[]> {
    return ApiClientService.getClient().get(API_PREFIX + `/checklists/${checklistId}/tasks`);
  }

  // create a task
  static async createTask(checklistId: string, task: TaskDto): Promise<TaskDto> {
    return ApiClientService.getClient().post(API_PREFIX + `/checklists/${checklistId}/tasks`, task);
  }

  // update a task
  static async updateTask(checklistId: string, task: TaskDto): Promise<TaskDto> {
    return ApiClientService.getClient().put(API_PREFIX + `/checklists/${checklistId}/tasks/${task.id}`, task);
  }

  // delete a task
  static async deleteTask(checklistId: string, taskId: string): Promise<void> {
    return ApiClientService.getClient().delete(API_PREFIX + `/checklists/${checklistId}/tasks/${taskId}`);
  }

  // reorder tasks
  static async reorderTasks(checklistId: string, tasks: string[]): Promise<void> {
    return ApiClientService.getClient().post(API_PREFIX + `/checklists/${checklistId}/tasks/reorder`, { tasks });
  }

  // toggle task completion
  static async toggleTaskCompletion(checklistId: string, taskId: string): Promise<void> {
    return ApiClientService.getClient().post(API_PREFIX + `/checklists/${checklistId}/tasks/${taskId}/toggle`);
  }

  // toggle all tasks completion
  static async toggleAllTasksCompletion(checklistId: string): Promise<void> {
    return ApiClientService.getClient().post(API_PREFIX + `/checklists/${checklistId}/tasks/toggle`);
  }

  // clear completed tasks
  static async clearCompletedTasks(checklistId: string): Promise<void> {
    return ApiClientService.getClient().delete(API_PREFIX + `/checklists/${checklistId}/tasks/clear`);
  }
}
