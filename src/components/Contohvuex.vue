<template>
    <div>
        <h1>Contoh Vuex</h1>
        <span>{{ $store.state.counter }}</span><br>
        <button class="btn btn-xs btn-danger" @click="tambah"><i class="bi bi-plus"></i> Add</button>
    </div>
</template>

<script>
export default {
    methods: {
        tambah() {
            this.$store.commit('tambahCounter');
        }
    }
}
</script>