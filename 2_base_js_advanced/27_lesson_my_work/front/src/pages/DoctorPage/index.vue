<template>
    <div>
        <div v-if="getDoctor">
            
            <!-- <a v-bind:href="'/doctors/edit/' + getDoctor._id"><div class="edit-doctor">Edit</div></a> -->
            <router-link :to="'/doctors/edit/' + getDoctor._id"><div class="edit-doctor">Edit</div></router-link>

            <div class="doctor-id">
                <span class="span-text">id: </span>
                <span><strong>{{ getDoctor._id }}</strong></span>
            </div>
            <div class="doctor-name">
                <span class="span-text">Name: </span>
                <span><strong>{{ getDoctor.name }}</strong></span>
            </div>
            <div class="doctor-specialisation">
                <span class="span-text">Specialisation: </span>
                <span><strong>{{ getDoctor.specialisation }}</strong></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'DoctorPage',

        methods: {
            ...mapActions(['loadData'])
        },

        computed: {
            ...mapGetters(['getDoctorsList']),

            getDoctorId() {
                return this.$route.params.id
            },
            getDoctor() {
                return this.getDoctorsList.find(doc => doc._id === this.getDoctorId)
            }
        },

        mounted () {
            this.loadData();
        },
    }
</script>

<style scoped>

</style>