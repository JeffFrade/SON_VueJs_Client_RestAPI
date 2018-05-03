<template>
    <div class="row">
        <div class="content-header">
            <h1>Bancos <small>Gerenciamento de bancos</small></h1>
            <div class="grey-text">
                <small>
                    <a href="#/">iFinance</a> >
                    <span>Seus bancos</span>
                </small>
            </div>
        </div>

        <div class="card col s12">
            <div class="card-content">
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>bancos</th>
                        </tr>
                    </thead>
                    <tbody>
                    <!--Necessário o .data (Pois os registros estão em .data)-->
                    <tr v-for="(bank, $index) in banks.data">
                        <td class="valign-wrapper">
                            {{ $index + 1 }} - {{ bank.title }} ({{ bank.code }})
                        </td>
                    </tr>
                    </tbody>
                </table>
                <!--resource = item que será acessado no servidor da API -->
                <!--No caso, o resource vai para a rota (api/banks)-->
                <pagination totalPerPage="15" resource="banks"></pagination>
            </div>
        </div>
    </div>
</template>

<script>
    // Importando outro arquivo .vue
    import Pagination from './../SharedComponents/Pagination'

    export default {
        name: "banks2",
        // Chamando o component que foi importado:
        components: {
            // 'nomedatag': conteúdo
            'pagination': Pagination
        },

        computed: {
            banks () {
                return this.$store.state.pagination.getList
            }
        }
    }
</script>