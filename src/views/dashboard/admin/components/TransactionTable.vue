<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;" />
</template>

<script>

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    fetchData() {
    }
  }
}
</script>
