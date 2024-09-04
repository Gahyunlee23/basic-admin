<template>
    <el-menu
        :default-active="$route.path"
        class="custom-sidebar"
        background-color="#324057"
    text-color="#fff"
    active-text-color="#409EFF"
    router
    >
    <el-menu-item
        v-for="route in routes"
        :key="route.path"
        :index="route.path"
    >
        <i :class="route.meta.icon || 'el-icon-menu'"></i>
        <span>{{ route.meta.title }}</span>
    </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    computed: {
        routes() {
            return this.$router.options.routes.filter(route => route.meta && route.meta.title);
        },
    },
};
</script>

<style scoped>
.custom-sidebar {
    width: 220px; /* 사이드바 너비 설정 */
    min-height: 100vh; /* 페이지 전체 높이 */
    border-right: 1px solid #ddd; /* 오른쪽에 경계선 */
}

/* 메뉴 항목 디자인 */
.el-menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

/* 메뉴 아이템 hover 효과 */
.el-menu-item:hover {
    background-color: #3A485B;
    color: #fff;
}

/* 아이콘과 텍스트 간격 */
.el-menu-item i {
    margin-right: 10px;
}

/* 활성화된 메뉴 항목 스타일 */
.el-menu-item.is-active {
    background-color: #409EFF; /* 활성화된 항목의 배경 색상 */
    color: white; /* 텍스트 색상 */
}

.el-menu-item.is-active i {
    color: white; /* 아이콘도 활성화된 항목의 색상 */
}
</style>
