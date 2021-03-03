import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    mounted(){
        this.$root.$emit('set-info', {title: "Lunar Sandbox", info: `Howdy. I make apps and put them here. Enjoi!
As you go through the apps here, this info box will update to show the info for each app.
    -Grayson`});
    }
}