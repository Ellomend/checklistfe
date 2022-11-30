import { ChecklistApiService } from 'src/services/api/ChecklistApiService/ChecklistApiService';
import { CheckListDto } from 'src/types/models';

export class ChecklistService {
  public static async getChecklists(): Promise<CheckListDto[]> {
    return await ChecklistApiService.getChecklists();
  }

  public static async getChecklist(id: string): Promise<CheckListDto> {
    return await ChecklistApiService.getChecklist(id);
  }

  public static async createChecklist(name: string): Promise<CheckListDto> {
    return await ChecklistApiService.createChecklist(name);
  }

  public static async deleteChecklist(id: string): Promise<void> {
    return await ChecklistApiService.deleteChecklist(id);
  }

  public static async updateChecklist(
    id: string,
    name: string
  ): Promise<CheckListDto> {
    return await ChecklistApiService.updateChecklist({ id, name });
  }
}
