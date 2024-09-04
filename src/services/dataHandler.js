export async function fetchDashboardData() {
  // 실제로는 API 호출을 수행하지만, 여기서는 더미 데이터를 반환합니다.
  return [
    { date: '2023-09-01', name: 'John Doe', address: '1234 Main St' },
    { date: '2023-09-02', name: 'Jane Smith', address: '5678 Elm St' },
  ];
}