import { observable, computed } from 'mobx';

class CountStore {
    @observable count = 0;

    incre() {
        this.count = this.count + 1;
    }

    decre() {
        this.count = this.count - 1;
    }
}

export default new CountStore();