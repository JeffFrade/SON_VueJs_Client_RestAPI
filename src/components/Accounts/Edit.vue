<script>
    export default {
        name: "account-edit",
        data: function () {
            return {
                sub_title: "Editar Conta",
                /*account: {
                    balance: 0
                }*/
            }
        },
        template: require('./form.html'),

        methods: {
            save() {
                this.account.id = this.$route.params.id
                this.account.balance = 0

                this.$store.dispatch('updateAccount', this.account).then(() => {
                    this.$router.push('/contas/' + this.account.id)
                })
            }
        },

        computed: {
            account () {
                return this.$store.state.account.accountView
            },

            banks() {
                return this.$store.state.bank.bankList
            }
        },

        created () {
            this.$store.dispatch('getAccount', this.$route.params.id)
            this.$store.dispatch('getBanks')
        }
    }
</script>