<template>
    <div id="app" class="app-layout">
        <Sidebar />
        <div class="main-content">
            <Breadcrumb />
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
    components: {
        Sidebar,
        Breadcrumb,
    },
};
</script>

<style scoped>
.app-layout {
    display: flex;
}

.main-content {
    flex: 1;
    padding: 20px;
}
</style>
