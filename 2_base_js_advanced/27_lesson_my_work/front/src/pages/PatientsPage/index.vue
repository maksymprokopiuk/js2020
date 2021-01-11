<template>
    <div v-if="getPatientsList">
        <b-button class="add-patient" @click="onAddPatient">Add patient</b-button>
        <div class="patients">
            <patient-element
                v-for="patient in getPatientsList"
                :key="patient._id"
                :id="patient._id"
                :name="patient.name"
                :disease="patient.disease"
            />
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import PatientElement from "@/components/PatientElement";

    export default {
        name: 'PatientsPage',

        components: {
            PatientElement,
        },

        computed: {
            ...mapGetters('patients', ['getPatientsList'])
        },

        methods: {
            ...mapActions('patients', ['loadDataPatients']),

            onAddPatient() {
                this.$router.push({name:'patientadd'})
            }
        },

        created () {
            this.loadDataPatients();
        },
    }
</script>

<style scoped>
.patients {
    display: flex;
    flex-wrap: wrap;
}
.add-patient {
    margin: 10px 0 0 10px;
}
</style>