<template>
    <center>
        <ul class="pagination">
            <li class="waves-effect" :class="{active: n == active}" v-for="n in parseInt(total)">
                <a href="" @click.prevent="navigate(n)">{{ n }}</a>
            </li>
        </ul>
        <p>Exibindo página {{ active }} de {{ total }}, total de {{ totalRegistires }} registros</p>
    </center>
</template>

<script>
    export default {
        name: "pagination",
        // props = Propriedades que tag terá
        props: [
            'totalPerPage',
            'resource'
        ],

        data: function () {
            return {
                active: 1
            }
        },

        computed: {
            registries () {
                return this.$store.state.pagination.getList
            },

            total () {
                // .last_page = Método do paginate do Laravel
                return this.registries.last_page || 1
            },

            totalRegistires () {
                // .total = Método do paginate do Laravel
                return this.registries.total || 0
            }
        },

        methods: {
            navigate: function (n) {
                this.active = n

                let config = {
                    resource: this.resource,
                    limit: this.totalPerPage,
                    page: n
                }

                this.$store.dispatch('getRegistries', config)
            }
        },

        created () {
            // Acessando a propriedade da tag (this.nome_do_prop)
            this.$store.dispatch('getRegistries', {resource: this.resource, limit: this.totalPerPage})
        }
    }
</script>