<template >
  <el-row style="height: 45px;">
    <el-col :span="18">
      <el-menu class="el-menu-header" mode="horizontal" text-color="#fff" active-text-color="#fff"
        background-color="#2494f2" router>
        <el-menu-item index="/Dynamic">
          <el-icon>
            <chat-dot-round />
          </el-icon> 科研动态
        </el-menu-item>
        <el-menu-item index="/Project">
          <el-icon>
            <notebook />
          </el-icon>科研项目
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <document />
          </el-icon>科研成果
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <edit />
          </el-icon>项目申报
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6">
      <div style="height: 45px;background-color: #2494f2;display: flex;justify-content: end;">
        <el-avatar :size="30" style="margin-top: 7px;"></el-avatar>
        <el-dropdown>
          <span class="el-dropdown-link">
            张迎雪
            <el-icon style="margin-top: 2px;">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { Edit, ChatDotRound, Notebook, Document, ArrowDown } from "@element-plus/icons-vue";
</script>

<style scoped>
.el-menu-header {
  height: 45px;
  border-bottom: solid 0px var(--el-menu-border-color);
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  height: 45px;
  line-height: 45px;
  margin: auto 10px;
}
</style>
