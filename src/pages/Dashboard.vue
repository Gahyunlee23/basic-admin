<template>
    <div class="dashboard-layout">
        <Sidebar />
        <div class="dashboard-content">
            <h2>Dashboard</h2>
            <DashboardTable :tableData="tableData" />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import DashboardTable from '@/components/DashboardTable.vue';
import { loadDashboardData } from '@/services/dashboardService';

export default {
    components: {
        Sidebar,
        DashboardTable,
    },
    data() {
        return {
            tableData: [],
        };
    },
    async mounted() {
        try {
            this.tableData = await loadDashboardData();
        } catch (error) {
            console.error('데이터 로드 실패:', error);
        }
    },
};
</script>

<style scoped>
.dashboard-layout {
    display: flex;
}

.dashboard-content {
    flex: 1;
    padding: 20px;
}
</style>
