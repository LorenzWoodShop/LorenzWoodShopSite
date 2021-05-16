import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer/Footer.vue';
import Nav from '@/components/Nav/Nav.vue';

@Component({
  components: {
    Nav,
    Footer
  }
})
export default class App extends Vue {

}