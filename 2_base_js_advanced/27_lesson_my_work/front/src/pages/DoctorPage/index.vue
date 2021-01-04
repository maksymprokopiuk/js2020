<template>
    <div>
        <div>
            <a v-bind:href="'/doctors/edit/' + getDoc._id"><div class="edit-doctor">Edit</div></a>
            <div class="doctor-id">
                <span class="span-text">id: </span>
                <span><strong>{{ getDoc._id }}</strong></span>
            </div>
            <div class="doctor-name">
                <span class="span-text">Name: </span>
                <span><strong>{{ getDoc.name }}</strong></span>
            </div>
            <div class="doctor-specialisation">
                <span class="span-text">Specialisation: </span>
                <span><strong>{{ getDoc.specialisation }}</strong></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    export default {
        name: 'DoctorPage',

        computed: {
            ...mapGetters(['getDoctorsList']),

            receivedDocId() {
                return this.$route.params.id
            },
            getDoc() {
                return this.getDoctorsList.find(item => item._id === this.receivedDocId)
            }
        },

        methods: {
            ...mapActions(['loadData'])
        },

        created () {
            this.loadData();
        },
    }
</script>

<style scoped>

</style>