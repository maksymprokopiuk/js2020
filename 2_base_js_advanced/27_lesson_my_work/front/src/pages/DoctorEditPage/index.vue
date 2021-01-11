<template>
    <div>
        <div>
            <b-field v-if="getDoctor" horizontal label="Name">
              <b-input type="text" v-model="getDoctor.name" required expanded></b-input>
            </b-field>

            <b-field v-if="getDoctor" horizontal label="Specialisation">
              <b-input type="text" v-model="getDoctor.specialisation" required expanded></b-input>
            </b-field>
        </div>

        <b-button type="is-success" @click="onUpd">Add</b-button>

    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'DoctorEditPage',

        methods: {
            ...mapActions('doctors', ['loadDataDoctors', 'updateDoctor']),

            onUpd() {
                this.updateDoctor({
                    doctorid: this.getDoctor._id,
                    name: this.getDoctor.name,
                    specialisation: this.getDoctor.specialisation,
                });
                this.$router.push({ name: "doctors" });
            },
        },

        computed: {
            ...mapGetters('doctors', ['getDoctorsList']),

            getDoctorId() {
                return this.$route.params.id
            },
            getDoctor() {
                return this.getDoctorsList.find(doc => doc._id === this.getDoctorId)
            },
        },

        mounted () {
            this.loadDataDoctors();
        },
    }
</script>

<style scoped>

</style>