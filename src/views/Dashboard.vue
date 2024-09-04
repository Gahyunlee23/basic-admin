<template>
    <div class="dashboard">
        <el-card>
            <h2>Admin Dashboard</h2>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180"></el-table-column>
                <el-table-column prop="name" label="Name" width="180"></el-table-column>
                <el-table-column prop="address" label="Address"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
