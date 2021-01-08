<template>
    <div>
        <div>
            <b-field v-if="getPatient" horizontal label="Name">
              <b-input type="text" v-model="getPatient.name" required expanded></b-input>
            </b-field>

            <b-field v-if="getPatient" horizontal label="Disease">
              <b-input type="text" v-model="getPatient.disease" required expanded></b-input>
            </b-field>
        </div>

        <b-button type="is-success" @click="onUpd">Add</b-button>

    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'PatientEditPage',

        methods: {
            ...mapActions('patients', ['loadData', 'updatePatient']),

            onUpd() {
                this.updatePatient({
                    patientid: this.getPatient._id,
                    name: this.getPatient.name,
                    disease: this.getPatient.disease,
                });
                this.$router.push({ name: "patients" });
            },
        },

        computed: {
            ...mapGetters('patients', ['getPatientsList']),

            getPatientId() {
                return this.$route.params.id
            },
            getPatient() {
                return this.getPatientsList.find(patient => patient._id === this.getPatientId)
            },
        },

        mounted () {
            this.loadData();
        },
    }
</script>

<style scoped>

</style>