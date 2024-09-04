<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbs" :key="index">
            {{ breadcrumb.meta.breadcrumb || breadcrumb.name }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    computed: {
        breadcrumbs() {
            return this.$route.matched;
        },
    },
};
</script>

<style scoped>
.el-breadcrumb {
    margin-bottom: 20px;
}
</style>
