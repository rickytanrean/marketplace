<template>
  <q-page class="q-pb-lg bg-grey-1">
    <q-header class="no-print box-shadow bg-brand">
      <q-toolbar>
        <q-btn v-go-back.single
          flat round dense
          icon="eva-arrow-back" />
        <q-toolbar-title class="text-weight-bold brand">
          <span v-if="invoice" >Invoice {{ invoice.order_ref }}</span>
        </q-toolbar-title>
        <q-btn icon="print" dense @click="printInvoice" flat></q-btn>
        <!-- <q-btn-dropdown flat icon="eva-printer-outline">
          <q-list flat class="no-print">
            <q-item clickable @click="printPacking">
              <q-item-section side>
                <q-icon name="eva-printer-outline"></q-icon>
              </q-item-section>
              <q-item-section>Print Label Pengiriman</q-item-section>
            </q-item>
            <q-item clickable @click="printInvoice">
              <q-item-section side>
                <q-icon name="eva-printer-outline"></q-icon>
              </q-item-section>
              <q-item-section>Print Tagihan</q-item-section>
            </q-item>
          </q-list>
      </q-btn-dropdown> -->
      </q-toolbar>
    </q-header>
    <div v-if="invoice" class="no-print">
      <div class="q-gutter-y-md">
        <div class="q-mt-md q-pb-lg bg-white q-py-md q-px-sm">
          <q-list dense >
            <q-item>
              <q-item-section>
                <q-item-label class="text-md">Invoice</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ invoice.order_ref }}
                  <q-icon name="eva-copy" size="18px" class="q-ml-xs cursor-pointer" @click="copy(invoice.order_ref)"></q-icon>
                  </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Tanggal Pembelian</q-item-section>
              <q-item-section>{{ invoice.created }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Status Pesanan</q-item-section>
              <q-item-section>
                <q-item-label>
                  <span class="q-px-md rounded-borders text-white q-py-xs"
                   :class="`bg-${getOrderStatusColor(invoice.order_status)}`"
                  >{{ invoice.status_label }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Status Pembayaran</q-item-section>
              <q-item-section>
                <q-item-label>
                  <span class="q-px-md rounded-borders text-white q-py-xs"
                   :class="`bg-${getOrderStatusColor(invoice.transaction.status)}`"
                  >{{ invoice.transaction.status_label }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
       <q-card class="no-print bg-white shadow" square>
          <div class="card-heading">Produk Detil</div>
          <q-card-section>
            <q-separator color="teal q-pt-xs" />
            <q-list separator>
              <q-item class="bg-green-1">
                <q-item-section>Produk</q-item-section>
                <q-item-section>Qty</q-item-section>
                <q-item-section>Harga</q-item-section>
              </q-item>
              <q-item v-for="(item, index) in invoice.items" :key="index">
                <q-item-section>
                  <div class="text-md">{{ item.name }}</div>
                  <div class="text-caption tet-grey-6">{{ item.note }}</div>
                </q-item-section>
                <q-item-section>{{ item.quantity }}</q-item-section>
                <q-item-section>{{ moneyIDR(item.price) }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
        <q-card class="no-print bg-white shadow" square>
          <div class="card-heading">
              <div>Info Pengiriman</div>
          </div>
          <q-card-section class="q-px-sm">
            <q-list dense>
              <q-item>
                <q-item-section>Penerima</q-item-section>
                <q-item-section>{{ invoice.customer_name }}</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Ponsel</q-item-section>
                <q-item-section>{{ invoice.customer_whatsapp }}</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Alamat</q-item-section>
                <q-item-section>
                  <q-item-label>
                    <div v-html="invoice.shipping_address"></div>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Kurir</q-item-section>
                <q-item-section>{{ invoice.shipping_courier_name }} {{ invoice.shipping_courier_service ? '' + ' - ' + invoice.shipping_courier_service : '' }}</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>No Resi <q-icon v-if="invoice.shipping_courier_code" name="eva-copy" size="18px" class="q-ml-sm cursor-pointer" @click="copy(invoice.shipping_courier_code)"></q-icon> </q-item-label>
                </q-item-section>
                <q-item-section>{{ invoice.shipping_courier_code ? invoice.shipping_courier_code  : '-'  }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
        <q-card class="no-print bg-white shadow" square>
          <div class="card-heading border-b">Rincian Pembayaran</div>
          <q-card-section class="q-px-sm">
            <q-list dense>
              <q-item>
                <q-item-section>Referensi</q-item-section>
                <q-item-section>{{  invoice.transaction.payment_ref  }}</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Metode Pembayaran</q-item-section>
                <q-item-section>{{ invoice.transaction.payment_method.split('_').join(' ') }}</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Total Belanja</q-item-section>
                <q-item-section>{{  moneyIDR(invoice.order_subtotal) }}</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>Total Ongkos Kirim ({{ invoice.order_weight }} gram)</q-item-section>
                <q-item-section>{{  moneyIDR(invoice.shipping_cost) }}</q-item-section>
              </q-item>
              <q-item v-if="invoice.order_unique_code">
                <q-item-section>Kode Unik</q-item-section>
                <q-item-section>{{  invoice.order_unique_code }}</q-item-section>
              </q-item>
              <q-item v-if="invoice.discount">
                <q-item-section>Diskon</q-item-section>
                <q-item-section>{{  moneyIDR(invoice.discount) }}</q-item-section>
              </q-item>
              <q-item v-if="invoice.payment_fee">
                <q-item-section>Payment Fee [ {{ invoice.transaction.payment_name }} ]</q-item-section>
                <q-item-section>{{ moneyIDR(invoice.payment_fee) }}</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-weight-bold q-py-sm text-md">Total Tagihan</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold q-py-sm text-md">{{  moneyIDR(invoice.grand_total) }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>

      </div>

    </div>
    <q-inner-loading :showing="loading" class="no-print">
       
    </q-inner-loading>
     <div v-if="invoice" :class="{'no-print': isPrintPacking}">
      <div class="print-invoice">
        <div class="">
          <div class="bg-white">
            <div class="text-center">
              <div class="text-weight-bold q-mb-xs" style="font-size:1.8rem">{{ shop.name }}</div>
              <div style="font-size:1.1rem">{{ shop.phone }}</div>
              <div style="font-size:1.1rem">{{ shop.app_url }}</div>
            </div>
            <hr />
            <div class="q-mb-md flex justify-between item-start" style="font-size:1.1rem">
                <table>
                    <tr>
                      <td align="left">Invocie No</td>
                      <td>:</td>
                      <td align="left">{{ invoice.order_ref }}</td>
                    </tr>
                    <tr>
                      <td align="left">Tanggal</td>
                      <td>:</td>
                      <td>{{ invoice.created }}</td>
                    </tr>
                    <tr>
                      <td align="left">Pembayaran</td>
                      <td>:</td>
                      <td>{{ invoice.transaction.payment_method.split('_').join(' ')}}</td>
                    </tr>
                    <tr>
                      <td align="left">Status</td>
                      <td>:</td>
                      <td>{{ invoice.transaction.status }}</td>
                    </tr>
                </table>
                <div v-if="qrData" class="">
                  <img :src="qrData" width="80" height="80"/>
                </div>
            </div>
            <hr />
            <div class="flex justify-between items-start" style="font-size:1.1rem">
              <div class="">
                <div class="text-weight-medium q-mb-xs">Pelanggan:</div>
                <div class="text-weight-bold">{{ invoice.customer_name }}</div>
                <div>{{ invoice.customer_whatsapp }}</div>
                <div v-html="invoice.shipping_address" style="font-size:1.2rem"></div> 
              </div>
              <!-- <div class="text-right" style="max-width:45%;">
                <div class="text-weight-medium q-mb-xs">Dibayarkan Kepada:</div>
                <div class="text-weight-bold q-mb-xs">{{ shop.name }}</div>
                <div class="">{{ shop.phone }}</div>
                <div v-html="shop.address"></div>
              </div> -->
            </div>
            <hr />
            <div class="relative q-pt-xs" style="font-size:1.1rem">
              <div class="text-weight-bold q-my-xs">Detil Pesanan:</div>
              <table class="table-order-item" v-if="invoice.items">
                <tr>
                  <th align="left">Item</th>
                  <th align="left">qty</th>
                  <th align="right">Harga</th>
                </tr>
                <tr v-for="(item, index) in invoice.items" :key="index">
                  <td class="">
                    <div>{{ item.name }}</div>
                    <div class="text-caption tet-grey-6">{{ item.note }}</div>
                  </td>
                  <td>{{ item.quantity }}</td>
                  <td align="right">{{ $money(item.price) }}</td>
                </tr>
              </table>
              <div class="column justify-end items-end q-mt-sm">
                <table class="dense">
                  <tr>
                    <td align="right">Jumlah</td>
                    <td>:</td>
                    <td>Rp</td>
                    <td align="right">{{ $money(invoice.order_subtotal) }}</td>
                  </tr>
                  <tr>
                    <td align="right">Ongkos Kirim</td>
                    <td>:</td>
                    <td>Rp</td>
                    <td align="right">{{ $money(invoice.shipping_cost) }}</td>
                  </tr>
                  <tr v-if="invoice.service_fee">
                    <td align="right">{{ config.service_fee_label }}</td>
                    <td>:</td>
                    <td>Rp</td>
                    <td align="right">{{ $money(invoice.service_fee) }}</td>
                  </tr>
                  <tr v-if="invoice.payment_fee > 0">
                    <td align="right">Jasa Pembayaran <span class="text-xs text-grey-7"> [ {{ invoice.transaction.payment_name }} ] </span></td>
                    <td>:</td>
                    <td>Rp</td>
                    <td align="right">{{ $money(invoice.payment_fee) }}</td>
                  </tr>
                  <tr v-if="invoice.order_unique_code">
                    <td align="right">Kode Unik</td>
                    <td>:</td>
                    <td></td>
                    <td align="right">{{ invoice.order_unique_code }}</td>
                  </tr>
                  <tr v-if="invoice.discount">
                    <td align="right">Diskon (-)</td>
                    <td align="right">:</td>
                    <td>Rp</td>
                    <td align="right">{{ invoice.discount? moneyIDR(invoice.discount) : 0 }}</td>
                  </tr>
                  <tr>
                    <th align="right">Total Bayar</th>
                    <th align="right">:</th>
                    <th>Rp</th>
                    <th align="right">{{ $money(invoice.grand_total) }}</th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="invoice" :class="{'no-print': isPrintInvoice}">
      <div class="print-packing">
        <div class="bg-white">
          <div class="text-center">
              <div class="text-weight-bold q-mb-xs" style="font-size:1rem">{{ shop.name }}</div>
              <div class="">{{ shop.phone }}</div>
              <div class="text-xs" v-html="shop.address"></div>
            </div>
          <div class="flex justify-between q-mb-sm">
            <div class="">
              <div class="text-weight-medium q-mb-xs text-weight-bold">Tujuan:</div>
              <div>{{ invoice.customer_name }}</div>
              <div>{{ invoice.customer_whatsapp }}</div>
               <div v-html="invoice.shipping_address"></div> 
            </div>
          </div>
          <div >
            <div class="q-mb-xs text-weight-bold">Detil Pesanan</div>
            <table class="table-order-item" v-if="invoice.items">
              <tr>
                <th align="left">Item</th>
                <th align="left">qty</th>
              </tr>
              <tr v-for="(item, index) in invoice.items" :key="index">
                <td class="">
                  <div>{{ item.name }}</div>
                  <div class="text-caption tet-grey-6">{{ item.note }}</div>
                </td>
                <td>{{ item.quantity }}</td>
              </tr>
            </table>

          </div>

        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { copyToClipboard } from 'quasar'
import { mapActions, mapState } from 'vuex'
import QRCode from 'qrcode'
export default {
  name: 'InvoiceIndex',
  data () {
    return {
      modalPayment: false,
      throtle: 1,
      isPrintPacking: false,
      isPrintInvoice: false,
      timeout: null,
      qrData: ''
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loading,
      shop: state => state.shop,
      invoice: state => state.order.invoice,
      config: state => state.config,
    }),
    isPaid() {
      return this.invoice.transaction.status == 'PAID' ? true : false
    },
    isPaymentType: function() {
      return this.invoice.transaction.payment_type == 'DIRECT' ? 'DirectPayment' : 'PaymentGateway';
    }
  },
  created() {
    this.getOrder()
  },

  methods: {
    ...mapActions('order', ['getOrderByRef']),
    generateQr() {
      let opts = {
          errorCorrectionLevel: 'H',
          type: 'image/jpeg',
          quality: 0.3,
          margin: 1,
        }
        QRCode.toDataURL(this.getRoutePath(), opts, (err, url) => {
        if (err) throw err

          this.qrData = url
        })
    },
    getRoutePath() {
      let props = this.$router.resolve({ 
        name: 'UserInvoice',
        params: { order_ref: this.invoice.order_ref },
      });

      return location.origin + props.href;
    },
    getOrder() {
      this.$store.commit('SET_LOADING', true)
      if(this.$route.params.order_ref) {
        this.getOrderByRef(this.$route.params.order_ref).then(response => {
          if(response.status == 200) {
            this.$store.commit('order/SET_INVOICE', response.data.results)

            setTimeout(() => {
              this.generateQr()
            }, 1000)
          }
          this.$store.commit('SET_LOADING', false)
           this.checkOrderStatus()
        }).catch(() => {
          this.$router.push({name: 'Cart'})
        })
      } else {
        this.$router.push({name: 'Cart'})
      }
    },
    money(number) {
     return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR'}).format(number)
    },
    chatToAdmin() {
      let text = `Halo ${this.shop.name},\nMohon pesanan saya untuk segera di proses.\nTerima Kasih.\n\nReferensi Order:\n${location.href}`
      let url = `https://api.whatsapp.com/send?phone=${this.formatPhoneNumber(this.shop.phone)}&text=${encodeURI(text)}`

      window.open(url, '_blank')
    },
    kirimBuktiTransfer() {
      this.modalPayment = false
      let text = `Halo ${this.shop.name},\nKonfirmasi pembayaran atas pesanan:\n*INVOICE ${this.invoice.order_ref}*\n\nReferensi Order:\n${location.href}\n\nBerikut saya sertakan bukti transfer.`
      let url = `https://api.whatsapp.com/send?phone=${this.formatPhoneNumber(this.shop.phone)}&text=${encodeURI(text)}`

      window.open(url, '_blank')
    },
    formatPhoneNumber(number) {
      let formatted = number.replace(/\D/g,'')

      if(formatted.startsWith('0')) {
        formatted = '62' + formatted.substr(1)
      }

      return formatted;
    },
    copy(str) {
      copyToClipboard(str)
      .then(() => {
        this.$q.notify({
          type: 'positive',
          message: 'Berhasil menyalin'
        })
      })
      .catch(() => {
        this.$q.notify({
          type: 'negative',
          message: 'Browser anda tidak support copy to clipboard'
        })
      })
    },
    handlePaymentModal() {
      this.modalPayment = true
    },
    getCheckOrder() {
      this.getOrderByRef(this.$route.params.order_ref).then(response => {
        if(response.status == 200) {
          this.$store.commit('order/SET_INVOICE', response.data.results)
          this.checkOrderStatus()
        }
      })
    },
    checkOrderStatus() {
      if(this.invoice.transaction.payment_type == 'PAYMENT_GATEWAY' && this.invoice.order_status == 'PENDING') {
        this.timeout = setTimeout(() => {
          this.getCheckOrder()
        }, 15000)
      } else {
        clearTimeout(this.timeout)
      }
    },
    copyAddress() {
      let addr = `${this.invoice.customer_name}\n${this.invoice.customer_whatsapp}\n${this.invoice.shipping_address}`
      this.copy(addr)
    },
    printInvoice() {
      if(!this.qrData) {
        this.generateQr()
      }
      const today = new Date().toDateString()
      document.title = `INVOICE #${this.invoice.order_ref} ${today}`
      this.isPrintPacking = false
      this.isPrintInvoice = true
      setTimeout(() => {
        window.print()
      }, 200)
    },
    printPacking() {
      const today = new Date().toDateString()
      document.title = `PACKING #${this.invoice.order_ref} ${today}`
      this.isPrintPacking = true
      this.isPrintInvoice = false
      setTimeout(() => {
        window.print()
      }, 200)
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  }

}
</script>

<style lang="scss">
.table-order-item {
  width: 100%;
  border-spacing: inherit;
  tr {
    th, td {
      padding:.5rem;
    }
    th {
      background-color: rgb(151, 250, 196);  
    }
    td {
      border-bottom: 1px solid #eee;
    }
  }
}
.print-packing,
.print-invoice {
  display:none;
  width:100%;
  max-width:600px;
  border: 1px solid;
  padding: 10px;
  margin-left: 0!important;
  font-size: 1rem;
}

@media print {
  .no-print {
    display: none;
  }
  .print-packing,
  .print-invoice {
    display:block;
    max-width:600px;
    font-size: 16pt;
  }
  .border {
     border: 1px solid #eee;
  }
  .table-order-item {
    width: 100%;
    border-spacing: inherit;
    tr {
      th, td {
        padding: none;
        border: 1px solid #eee;
      }
    }
  }
}

</style>