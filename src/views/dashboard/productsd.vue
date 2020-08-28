<template>
<div class="container">
    <nav class="d-flex justify-content-end mt-3 mb-3">
        <b-button pill variant="primary" @click="newModal">建立新產品</b-button>
    </nav>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>
            分類
          </th>
          <th>產品名稱</th>
          <th>
            原價
          </th>
          <th>
            售價
          </th>
          <th>
            是否啟用
          </th>
          <th>
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item) in products"
          :key="item.id"
        >
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            {{ item.origin_price }}
          </td>
          <td>
            {{ item.price }}
          </td>
          <td>
            <span
              v-if="item.enabled"
              class="text-success"
            >啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <b-button
                class="btn btn-outline-primary btn-sm"
                @click="getDetails(item)"
              >
                編輯
              </b-button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="delModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- newModal -->
<b-modal ref="newModal" size="xl" centered hide-footer title="產品內容">
  <div class="row">
    <div class="col-4">
      <b-form>
        <div class="form-group">
        <label>顯示圖片網址</label>
        <input v-model="tempProduct.imageUrl[0]" type="text" class="form-control" placeholder="請輸入圖片網址">
        </div>
        <div class="form-group">
          <label class="d-flex justify-content-between align-items-center">上傳圖片<b-button @click="uploadedFile">上傳圖片</b-button></label>
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="選擇圖片"
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt="">
        </div>
      </b-form>
    </div>
    <div class="col-8">
       <div class="form-group">
        <label>標題</label>
        <b-form-input v-model="tempProduct.title" placeholder="請輸入標題"></b-form-input>
      </div>
      <div class="form-row">
      <div class="form-group">
        <label>分類</label>
        <b-form-input v-model="tempProduct.category" placeholder="請輸入分類"></b-form-input>
      </div>
       <div class="form-group">
        <label>單位</label>
        <b-form-input v-model="tempProduct.unit" placeholder="請輸入單位"></b-form-input>
      </div>
      </div>
      <div class="form-row">
      <div class="form-group">
        <label>原價</label>
        <b-form-input v-model="tempProduct.origin_price" placeholder="請輸入原價"></b-form-input>
      </div>
      <div class="form-group">
        <label>售價</label>
        <b-form-input v-model="tempProduct.price" placeholder="請輸入售價"></b-form-input>
      </div>
      </div>
       <div class="form-group">
        <label>產品說明</label>
        <b-form-textarea rows="3" max-rows="3" v-model="tempProduct.description" placeholder="請輸入產品說明"></b-form-textarea>
      </div>
       <div class="form-group">
        <label>產品描述</label>
        <b-form-textarea rows="3" max-rows="3"  v-model="tempProduct.content" placeholder="請輸入產品描述"></b-form-textarea>
      </div>
      <div class="d-flex justify-content-between">
      <b-form-checkbox
      id="is_enabled"
      v-model="tempProduct.enabled"
    >
    啟用
    </b-form-checkbox>
    <b-button @click="newProduct()">新增產品</b-button>
    <b-button @click="saveProduct()">儲存修改</b-button>
    </div>
    </div>
  </div>
</b-modal>
<!-- delModal -->
<b-modal ref="delModal" centered hide-footer title="刪除商品">
  <div class="d-flex justify-content-between">
  確定刪除"{{tempProduct.title}}"？
  <b-button @click="delProduct()">確認刪除</b-button>
  </div>
</b-modal>
    <!-- Modalend -->
</div>
</template>
<script>

export default {
  data () {
    return {
      token: '',
      products: [],
      tempProduct: {
        title: '',
        category: '',
        unit: '',
        origin_price: '',
        price: '',
        description: '',
        content: '',
        enabled: true,
        imageUrl: [],
      },
      file: null,
      pagination: {},
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      this.$http.get(api).then((response) => {
        this.products = response.data.data;
      })
    },
    newModal () {
      this.tempProduct = {
        imageUrl: []
      }
      this.$refs.newModal.show();
    },
    getDetails (item) {
      this.tempProduct = { ...item }
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
      this.$http.get(api).then((response) => {
        this.tempProduct = response.data.data;
      })
      this.tempProduct = { ...item }
      this.$refs.newModal.show();
    },
    newProduct(){
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product`;
      this.$http.post(api, this.tempProduct).then(() => {
        this.getProducts();
        this.$refs.newModal.hide();
      });
    },
    saveProduct(item){
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
      this.$http.patch(api, this.tempProduct).then(() => {
        this.getProducts();
        this.$refs.newModal.hide();
      });
    },
    uploadedFile(){
      const uploadedFile = this.file;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/storage`;
      const formData = new FormData();
      formData.append('file', uploadedFile);
      this.$http.post(api, formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        this.tempProduct.imageUrl.push(response.data.data.path);
      })
    },
    delModal (item) {
      this.tempProduct = { ...item }
      this.$refs.delModal.show();
    },
    delProduct () {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
      this.$http.delete(api).then(() => {
        this.$refs.delModal.hide();
        this.getProducts();
      })
    }

  //   delProduct () {
  //     const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/admin/ec/product/${this.tempProduct.id}`
  //     this.$http.delete(url).then(() => {
  //       $('#delModal').modal('hide')
  //       this.getProducts()
  //     })
  //   },
  }
}
</script>
