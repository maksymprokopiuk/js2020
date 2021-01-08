<template>
    <div>
        <div v-if="getPatient">
            
            <!-- <a v-bind:href="'/patients/edit/' + getPatient._id"><div class="edit-patient">Edit</div></a> -->
            <router-link :to="'/patients/edit/' + getPatient._id"><div class="edit-patient">Edit</div></router-link>

            <div class="patient-id">
                <span class="span-text">id: </span>
                <span><strong>{{ getPatient._id }}</strong></span>
            </div>
            <div class="patient-name">
                <span class="span-text">Name: </span>
                <span><strong>{{ getPatient.name }}</strong></span>
            </div>
            <div class="patient-disease">
                <span class="span-text">Disease: </span>
                <span><strong>{{ getPatient.disease }}</strong></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'PatientPage',

        methods: {
            ...mapActions('patients', ['loadData'])
        },

        computed: {
            ...mapGetters('patients', ['getPatientsList']),

            getPatientId() {
                return this.$route.params.id
            },
            getPatient() {
                return this.getPatientsList.find(patient => patient._id === this.getPatientId)
            }
        },

        mounted () {
            this.loadData();
        },
    }
</script>

<style scoped>

</style>