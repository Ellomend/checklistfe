import {ApiClientService} from 'src/services/api/ApiClientService/ApiClientService';
import {CheckListDto} from 'src/types/models';
import {API_PREFIX} from 'src/config/endpoints';

export class ChecklistApiService {
  static async getChecklists(): Promise<CheckListDto[]> {
    return ApiClientService.getClient().get(API_PREFIX + '/checklists');
  }

  static async getChecklist(id: string): Promise<CheckListDto> {
    return ApiClientService.getClient().get(API_PREFIX + `/checklists/${id}`);
  }

  static async createChecklist(checklist: CheckListDto): Promise<CheckListDto> {
    return ApiClientService.getClient().post(API_PREFIX + '/checklists', checklist);
  }

  static async updateChecklist(checklist: CheckListDto): Promise<CheckListDto> {
    return ApiClientService.getClient().put(API_PREFIX + `/checklists/${checklist.id}`, checklist);
  }

  static async deleteChecklist(id: string): Promise<void> {
    return ApiClientService.getClient().delete(API_PREFIX + `/checklists/${id}`);
  }

  // reorders tasks in a checklist
  static async reorderTasks(checklistId: string, tasks: string[]): Promise<void> {
    return ApiClientService.getClient().post(API_PREFIX + `/checklists/${checklistId}/reorder`, { tasks });
  }
}
