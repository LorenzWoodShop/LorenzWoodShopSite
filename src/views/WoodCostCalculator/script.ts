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
        if(this.boardName === ''){
            this.errorMessage = "Species is blank";
        } else if ( this.boardCost === 0 || this.boardWidth === 0 || this.boardLength === 0 || this.boardThickness === 0){
          this.errorMessage = "An input is 0";
        }else {
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
}