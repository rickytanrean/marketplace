<template>
  <q-page class="q-pb-xl" :class="{'flex flex-center' : !blocks.available}">
     <q-header :class="getHeaderColorBrand">
      <q-toolbar>
        <q-btn :to="{name: 'Settings'}"
          flat round dense
          icon="eva-arrow-back" />
        <q-toolbar-title>
         List Block
        </q-toolbar-title>
        <q-btn color="white" text-color="grey-8" size="13px" @click="handleAddBlock" no-caps icon="eva-plus-circle" label="Tambah Block" class="gt-xs"/>
      </q-toolbar>
    </q-header>
    <q-list separator>
      <q-item class="item-header">
        <q-item-section side style="min-width:60px;" class="text-center">#</q-item-section>
        <q-item-section>Title</q-item-section>
        <q-item-section>Type</q-item-section>
        <q-item-section side>Action</q-item-section>
      </q-item>
      <q-item v-for="block in blocks.data" :key="block.id">
        <q-item-section side>
          <q-img v-if="block.image" :src="block.image_url" class="bg-white rounded-corners img-thumbnail img-avatar"/>
        </q-item-section>
        <q-item-section >
          <q-item-label class="text-subtitle2">{{ block.label }}</q-item-label>
          <q-item-label v-if="block.description" caption class="" v-html="block.description"></q-item-label>
        </q-item-section>

        <q-item-section>
          <div class="q-mt-xs">
            <q-chip size="sm" icon="bookmark" outline color="blue-7" text-color="white">{{ block.position }}</q-chip>
            <q-chip v-if="block.post_id" size="sm" icon="check_circle" outline color="teal" text-color="white">Linked</q-chip>
          </div>
        </q-item-section>

        <q-item-section side top>
          <div class="text-grey-8 q-gutter-x-sm">
            <q-btn @click="handleRemoveBlock(block.id)" size="sm" round icon="delete" color="red"/>
            <q-btn @click="handleEditBlock(block)" size="sm" round color="blue" icon="edit" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <template v-if="!blocks.available">
      <div>Tidak ada data</div>
    </template>
     <q-inner-loading :showing="!blocks.ready">
    </q-inner-loading>
    <q-page-sticky class="lt-sm" position="bottom-right" :offset="[12, 12]">
      <q-btn fab icon="add" color="primary" @click="handleAddBlock" glossy/>
    </q-page-sticky>
    <q-dialog v-model="blockModal">
      <q-card style="width:100%;max-width:450px;" class="bg-white">
        <div class="card-heading text-md">{{ formType == 'add' ? 'Tambah' : 'Edit' }} Data</div>
        <form @submit.prevent="submitBlock" class="full-width">
          <q-card-section class="q-gutter-y-md">
            <q-input
            filled 
            required
            label="Label" 
            v-model="form.label" 
            />
            <q-select
            filled
            v-model="form.position"
            :options="positionOptions"
            label="Pilih Tipe"
          />
           <q-input
           filled 
            v-if="form.position == 'Featured'"
            label="Deskripsi" 
            v-model="form.description" 
            autogrow
            class="q-mb-sm"
            />
            <q-input
            filled 
            required
            label="Urutan" 
            v-model="form.weight" 
            mask="####"
            :hint="form.position == 'Banner' ? 'Posisi banner: 1 , 2 atau 3' : ''"
            />
            <div class="q-mt-md">
             <q-toggle label="Link ke Post" v-model="linkToPost" @input="handleLinkPost"></q-toggle>
            </div>
            <template v-if="linkToPost">
              <div class="text-grey-7 q-my-sm">Pilih Post</div>
              <div class="">
                <q-list separator bordered style="max-height:150px;overflow-y:auto">
                    <q-item v-for="post in posts.data" :key="post.id" clickable @click="selectPostData(post)">
                      <q-item-section avatar>
                      <q-icon :color="form.post_id == post.id ? 'green-7' : 'grey-7'" text-color="white" 
                      :name="form.post_id == post.id  ? 'task_alt' : 'remove_circle_outline'" />
                      </q-item-section>
                      <q-item-section>{{ post.title }}</q-item-section>
                    </q-item>
                  </q-list>
              </div>
            </template>
          </q-card-section>
          <q-card-section>
            <q-btn @click.prevent="handleUploadImage" color="primary" size="sm" label="Upload Gambar"></q-btn>
            <input type="file" class="hidden" ref="image" @change="handleImagePreview">
          </q-card-section>
          <q-card-section v-if="imagePreview">
            <div class="row items-center justify-between q-gutter-x-sm">
                <img :src="imagePreview" style="max-height:80px;width:auto;object-fit:contain"/>
            </div>
          </q-card-section>
          <q-card-actions class="justify-end q-pa-md sticky-bottom bg-grey-2">
            <q-btn @click.prevent="closeModal" type="button" color="primary" outline label="Batal"></q-btn>
            <q-btn :loading="loading" type="submit" color="primary" label="Simpan Data"></q-btn>
          </q-card-actions>
        </form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'BlockIndex',
  data() {
    return {
      linkToPost: false,
      selctedPost: null,
      loading: false,
      formType: '',
      blockModal: false,
      form: {
        id: '',
        label: '',
        description: '',
        weight: '',
        position: '',
        image: '',
        del_image: false,
        post_id:''
      },
      imagePreview: '',
      positionOptions: ['Featured', 'Banner'],
    }
  },
  computed: {
    ...mapState({
      blocks: state => state.block.admin_data,
      posts: state => state.post.posts
    }),
  },
  mounted() {
    if(!this.blocks.data.length) {
      this.getAdminBlocks()
    }
    if(!this.posts.data.length) {
      this.$store.dispatch('post/getAllPost')
    }
  },
  methods: {
    ...mapActions('block', ['addBlock', 'updateBlock', 'getAdminBlocks', 'getBlockById', 'deleteBlock']),
    selectPostData(post) {
        this.form.post_id = post.id
     },
     handleLinkPost() {
       if(!this.linkToPost) {
         this.form.post_id = ''
       }
     },
    submitBlock() {
      if(this.form.position == 'Banner') {
        if(this.form.weight > 3) {
          this.$q.dialog({
            title: 'Error',
            message: 'Urutan block tipe banner maksimal adalah 3, Anda bisa pilih no 1, 2 atau 3'
          })

          return
        }
      }
      this.loading = true
      if(this.formType == 'add') {
        this.addBlock(this.form).then(response => {
          this.loading = false
          this.closeModal()
          this.getAdminBlocks()
        }).catch(() => {;
          this.loading = false
        })
      }
      if(this.formType == 'edit') {
        this.updateBlock(this.form).then(() => {
          this.loading = false
          this.closeModal()
          this.getAdminBlocks()
        }).catch(() => {
          this.loading = false
        })
      }
    },
    handleEditBlock(block) {
      this.clearForm()
      this.formType = 'edit'
      this.linkToPost = block.post_id? true : false
      this.form.id = block.id
      this.form.post_id = block.post_id
      this.form.label = block.label
      this.form.description = block.description
      this.form.weight = block.weight
      this.form.position = block.position
      this.imagePreview = block.image_url
      this.blockModal = true
    },
    handleRemoveBlock(id) {
      this.$q.dialog({
        title: 'Konfirmasi Penghapusan Item',
        message: 'Yakin akan menghapus data?',
        ok: {label: 'Hapus', flat: true, 'no-caps': true},
        cancel: {label: 'Batal', flat: true, 'no-caps': true},
      }).onOk(() => {
        this.deleteBlock(id)
      })
    },
    handleAddBlock() {
      this.clearForm()
      this.blockModal = true
      this.formType = 'add'
      this.form.weight = this.blocks.data.length? this.blocks.data.length+1 : 1
    },
    clearForm() {
      this.form.id = ''
      this.form.label = ''
      this.form.description = ''
      this.form.post_id = ''
      this.form.image = ''
      this.form.position = ''
      this.form.weight = ''
      this.form.del_image = false
      this.imagePreview = ''

    },
    handleUploadImage() {
      this.$refs.image.click()
    },
    handleRemoveImage() {
      this.imagePreview = '';
      this.form.image = ''
      if(this.formType == 'edit') {
        this.form.del_image = true
      }
    },
    closeModal() {
      this.blockModal = false,
      this.clearForm()
    },
    handleImagePreview() {
      let img = this.$refs.image.files[0]
      if(!img) return

      this.form.image = img

      const reader = new FileReader()

      reader.onload = (e) => {
        this.imagePreview = e.target.result
      }

      reader.readAsDataURL(img)
    }
  }

}
</script>
