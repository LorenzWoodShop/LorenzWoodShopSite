import { Component, Vue } from 'vue-property-decorator';
import {Board} from '../../interfaces/woodCalculator';

@Component
export default class WoodCostCalculator extends Vue {
    cart: Board[] = [];
    errorMessage: string = '';

    boardName: string = '';
    boardCost: number = 0;
    boardWidth: number = 0;
    boardLength: number = 0;
    boardThickness: number = 0;
    boardTotalCost: number = 0;
    currentId: number = 0;

    get CalculateCartTotal(){
        let total = 0;
        for(const board of this.cart){
            total += Number(board.totalCost);
        }
        return Number(total.toFixed(2));
    }

    AddBoardToCart(){
        if(this.boardName === '' || this.boardCost === 0 || this.boardWidth === 0 || this.boardLength === 0 || this.boardThickness === 0){
            this.errorMessage = "No blank name, no 0's!";
        } else {
            this.errorMessage = '';
            const thisTotalCost:number = Number((((this.boardThickness * this.boardWidth * this.boardLength) / 144) * this.boardCost).toFixed(2));
            const newBoard:Board = {
                id: this.currentId,
                name: this.boardName,
                cost: Number(this.boardCost),
                width: Number(this.boardWidth),
                length: Number(this.boardLength),
                thickness: Number(this.boardThickness),
                totalCost: thisTotalCost
            };
            this.cart.push(newBoard);
            this.currentId ++;
        }
    }

    RemoveBoardFromCart(thisBoard: Board){
        this.cart = this.cart.filter(board => board.id !== thisBoard.id);
    }

    mounted() {
        this.$root.$emit('set-info', {
            title: "Wood Cost Calculator",
            info:
                `Wood cost is calculated by volume, and is not easy to do by hand so I wrote a calculator. There are many like it, but this one is mine.

Here's how to calculate wood costs. 1 board foot is an amount of wood, by volume, equaling 12 inches, by 12 inches, by 1 inch. So our cost calculation is:

((width * length * thickness) / 144) * cost

Keep in mind that most places list thickness as quarters of an inch, and be sure to measure your boards. A 4/4 board may not be exactly 1 inch thick, but that's what you're getting charged.
This is because boards are rough cut at 1 inch thick, then planed down to a nice usable board.`
        });
    }
}