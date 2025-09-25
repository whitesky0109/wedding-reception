import bcrypt from 'bcryptjs';

import supabase from './index';

class GuestbookService {
  async getGuestbook(limit: number, offset: number) {
    const { data: Posts, error: error1 } = await supabase
      .from('guestbook')
      .select('id, name, content, timestamp')
      .order('timestamp', { ascending: false })
      .eq('valid', true)
      .range(offset, limit);

    if (error1) {
      throw error1;
    }

    const { error: error2, count } = await supabase
      .from('guestbook')
      .select('*', { count: 'exact', head: true });
    console.log(count);

    if (error2) {
      throw error2;
    }

    return {
      Posts,
      Total: count || 0,
    };
  }

  async createGuestbookPost(name: string, content: string, password: string) {
    const { data, error: error1 } = await supabase
      .from('guestbook')
      .insert<IGuestbook>([{
        name,
        content,
        password: bcrypt.hashSync(password, 14),
      }]);

    if (error1) {
      throw error1;
    }

    return data;
  }

  async deleteGuestbookPPost(id: number, password: string) {
    const { data: targetPassword, error: error1 } = await supabase
      .from('guestbook')
      .select('password')
      .eq('id', id)
      .eq('valid', true)
      .single<string>()

    if (error1) {
      throw error1;
    }

    let passwordMatch = false;
    if (targetPassword) {
      passwordMatch = bcrypt.compareSync(password, targetPassword);
    }

    if (!passwordMatch) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    const { data: result, error: error2 } = await supabase
      .from('guestbook')
      .update<IGuestbook>({ valid: false })
      .eq('id', id);

    if (error2) {
      throw error2;
    }

    return result;
  }
}

export default new GuestbookService();

export type IGuestbook = {
  name: string,
  content: string,
  password: string,
  timestamp: number,
} & Partial<{
  id: number, // auto increment
  valid: boolean,
}>;
