import { Api } from 'boot/axios'

export function getOrders ({commit}) {
  commit('SET_LOADING', true, { root: true})
  Api().get('orders').then(response => {
    if(response.status == 200) {
      commit('SET_ORDERS', response.data.results)
    }
  }).finally(() => commit('SET_LOADING', false, { root: true}))
}
export function getOrderByRef ({commit}, ref) {
  return Api().get('orders/' + ref)
}
export function getPaginateOrder ({commit}, payload) {
  commit('SET_LOAD_MORE', true)
  Api().get(`orders?filter=${payload.filter}&skip=${payload.skip}`).then(response => {
    if(response.status == 200) {
      commit('SET_PAGINATE_ORDERS', response.data.results)
    }
  }).finally(() => {
    commit('SET_LOAD_MORE', false)
  })
}
export function searchOrder ({commit}, search) {
  commit('SET_LOADING', true, { root: true})
  Api().get(`orders?search=${search}`).then(response => {
    if(response.status == 200) {
      commit('SET_ORDERS', response.data.results)
    }
  }).finally(() => {
    commit('SET_LOADING', false, { root: true})
  })
}
export function filterOrder ({ commit }, payload) {
  commit('SET_LOADING', true, { root: true})
  Api().get('orders?filter='+ payload).then(response => {
    if(response.status == 200) {
      commit('SET_ORDERS', response.data.results)
    }
  }).finally(() => {
    commit('SET_LOADING', false, { root: true})
  })
}

export function getCustomerOrders ({ commit }, filter = {}) {
  let url = 'customer/orders'
  if(Object.entries(filter).length) {
    url += `?${new URLSearchParams(filter).toString()}`
  }
  Api().get(url).then(response => {
    if(response.status == 200) {
      commit('SET_CUSTOMER_ORDERS', response.data.results)
    }
  })
}
export function getPaginateCustomerOrder ({ commit }, filter = {}) {
  commit('SET_LOAD_MORE_CUSTOMER', true)

  let url = 'customer/orders'
  
  if(Object.entries(filter).length) {
    url += `?${new URLSearchParams(filter).toString()}`
  }

  Api().get(url).then(response => {
    if(response.status == 200) {
      commit('SET_PAGINATE_CUSTOMER_ORDERS', response.data.results)
    }
  }).finally(() => {
    commit('SET_LOAD_MORE_CUSTOMER', false)
  })
}


export function updateOrder ({dispatch}, payload) {
  Api().post('orders/'+ payload.id, payload).then(response => {
    if(response.status == 200) {
      dispatch('getOrders')
    }
  })
}
export function destroyOrder ({}, id) {
  return Api().delete('orders/'+ id)
}
export function acceptPayment ({}, id) {
  return Api().post('order/accept-payment/'+ id)
}
export function cancelOrder ({}, id) {
  return Api().post('cancelOrder/'+ id)
}

export function inputResi ({}, payload) {
  return Api().post('order/input-resi', payload)
}
export function updateStatusOrder ({}, payload) {
 return Api().post('order/update-status', payload)
}

export function getInvoice ({}, order_ref) {
  return Api().get('invoice/'+ order_ref)
}
export function storeOrder ({}, payload) {
  return Api().post('storeorder', payload)
}