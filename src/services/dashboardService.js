import { fetchDashboardData } from '@/services/dataHandler';

export async function loadDashboardData() {
  try {
    const data = await fetchDashboardData();
    return data;
  } catch (error) {
    console.error('데이터 로드 실패:', error);
    throw error;
  }
}