export const state = (): State => ({
  data: [],
  timestamp: 0
})
export type State = {
  data: Array<{
    id: { title?: string; url: string; OGP?: string | undefined; description?: string | undefined } | undefined
  }>
  timestamp: number
}

export const mutations = {
  setData(state: State, val: any) {
    const { data, id } = val
    for (const [key, item] of Object.entries(state.data)) {
      console.debug(key, id)
      if (key == id) {
        console.debug(state.data[id], JSON.parse(JSON.stringify({ data: data })))
        state.data[id] = JSON.parse(JSON.stringify({ data: data }))
      }
    }
  },
  setAllData(state: any, Data: any) {
    state.data = Data
  },
  setTimestamp(state: any) {}
}

export const actions = {
  setAllData({ commit }: any, data: any) {
    commit("setAllData", data)
  },
  setData({ commit }: any, { data, id }: any) {
    commit("setData", { data, id })
  },
  setTimestamp({ commit }: any) {
    commit("setTimestamp", 0)
  }
}

export const getters = {
  getAllData(state: State) {
    return state.data
  },
  getData(state: State) {
    return state.data
  },
  getTimestamp(state: State) {
    return state.timestamp
  }
}
