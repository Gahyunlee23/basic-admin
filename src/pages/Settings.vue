<template>
    <div class="dashboard-layout">
        <Sidebar />
        <div class="dashboard-content">
            <h2>Setting</h2>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';


export default {
    components: {
        Sidebar,
    },
    data() {},
    async mounted() {},
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
