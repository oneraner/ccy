<template>
  <div class="container">
    <table id="imageTable" class="table mt-3 text-primary" width="1200px">
      <thead>
        <tr>
          <th scope="col">圖片縮圖</th>
          <th scope="col">網址</th>
          <th scope="col">Button</th>
        </tr>
      </thead>
      <tbody v-if="storages.length">
        <tr v-for="(item, key) in storages" :key="key">
          <td class="table-width-mid">
            <img :src="item.path" class="img-fluid" width="230px">
          </td>
          <td class="table-width-big">
            {{item.path}}
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <b-button class="btn btn-danger" @click.prevent="openModal(item)">Delete</b-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <div class="d-flex justify-content-center">
    <Pagination
      :pages="pagination"
      @emitPages="getData"
    />
    </div>
    <!-- Modal -->
    <b-modal id="deleteModal" ref="deleteModal" class="modal-dialog modal-dialog-centered" tabindex="-1" role="dialog" centered title="刪除圖片" hide-footer>
      <div class="modal-body">
        <p>確定刪除所選的圖片</p>
      </div>
      <div class="modal-footer">
        <b-button class="btn btn-primary" @click="$bvModal.hide('deleteModal')">取消</b-button>
        <b-button class="btn btn-danger" @click="deleteImage">確認刪除</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      storages: {},
      tempData: {},
      pagination: {}
    }
  },
  created () {
    this.getData()
  },
  components: {
    Pagination
  },
  methods: {
    getData (page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage?page=${page}`
      this.$http.get(url).then((response) => {
        this.storages = response.data.data
        this.pagination = response.data.meta.pagination
      })
    },
    openModal (item) {
      this.tempData = { ...item }
      this.$refs.deleteModal.show()
    },
    deleteImage () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage/${this.tempData.id}`

      this.$http.delete(url).then(() => {
        this.$swal({
          icon: 'success',
          title: '',
          text: '刪除成功',
          button: 'OK'
        })
        this.$refs.deleteModal.hide()
        this.getData()
      }).catch((error) => {
        if (error) {
          this.$swal({
            icon: 'error',
            title: '刪除失敗!',
            text: '請稍微再試一次',
            button: 'OK'
          })
        }
      })
    }
  }

}
</script>
