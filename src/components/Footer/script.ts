import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
    OnInfoClick(){
        this.$root.$emit('toggle-info');
    }
}
