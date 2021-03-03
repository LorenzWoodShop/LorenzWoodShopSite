import { Component, Vue } from 'vue-property-decorator';

@Component
export default class A1Template extends Vue {

    mounted() {
        this.$root.$emit('set-info', {
            title: "App Title",
            info:
                `App description and instructions.`
        });
    }
}