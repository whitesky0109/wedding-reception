import supabase from './index';

class AttendanceService {
  async createAttendance(side: string, name: string, meal: string, count: number) {
    const { data, error } = await supabase
      .from('attendance')
      .insert([{ side, name, meal, count }]);

    if (error) {
      throw error;
    }

    return data;
  }
}


export default new AttendanceService();