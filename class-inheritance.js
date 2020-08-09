// Class Inheritance

class Grid {

    constructor(isScrollable, rows, columns){
        this.isScrollable = isScrollable;
        this.rows = rows;
        this.columns = columns;
    }

    getTableSize () {
        return `${this.rows} x ${this.columns}`;
    }

    scrollOnOff () {
        (this.isScrollable) ? 
            this.isScrollable = false : this.isScrollable = true; 
    }

    addRow () {
        this.rows += 1;
    }

    calcRows () {
        return this.rows;
    }

}



const dataForUserTable = [
    {
        id: 1,
        name: 'Ivan Petrov',
        login: 'admin',
        password: 'admin',
        isAdmin: true
    },
    {
        id: 2,
        name: 'Elena Mezenceva',
        login: 'helen',
        password: 'meza123',
        isAdmin: false
    },
    {
        id: 3,
        name: 'Konstantin Zhuravel',
        login: 'kostya',
        password: 'zur123',
        isAdmin: false
    }
]

class User extends Grid {

    constructor(isScrollable, rows, columns, data, background) {
        super(isScrollable, rows, columns);
        this.data = data;
        this.background = background;
    }

    changeBackground (newBackground) {
        this.background = newBackground;
    }

    sortByName () {
        return this.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }

    showAdmins () {
        return this.data.filter(item => item.isAdmin === true);
    }

    findUserByName (name) {
        return this.data.find(item => item.name === name);
    }

    addRow (newRow) {
        super.addRow();
        this.data.push(newRow);
    }

    calcRows () {
        return this.showAdmins().length;
    }
}


const user1 = new User(true, 3, 5, dataForUserTable, 'grey');



const dataForOrderTable = [
    {
        id: 1,
        description: 'Order 1',
        isCompleted: true
    },
    {
        id: 2,
        description: 'Order 2',
        isCompleted: false
    },
    {
        id: 3,
        description: 'Order 3',
        isCompleted: true
    }
]

class Order extends Grid {

    constructor(isScrollable, rows, data, borderColor) {
        super(isScrollable, rows);
        this.columns = 3;
        this.data = data;
        this.borderColor = borderColor;
    }

    changeBorderColor (newColor) {
        this.borderColor = newColor;
    }

    showCompletedOrders () {
        return this.data.filter(item => item.isCompleted === true);
    }

    findOrderById (id) {
        return this.data.find(item => item.id === id);
    }

    changeStatus (id) {
        const orderFound = this.findOrderById(id);
        (orderFound.isCompleted) ? 
            orderFound.isCompleted = false : orderFound.isCompleted = true; 
    }

    addRow (newRow) {
        super.addRow();
        newRow.isCompleted = false;
        this.data.push(newRow);
    }

    calcRows () {
        return this.showCompletedOrders().length;
    }
}

const order1 = new Order(true, 4, dataForOrderTable, 'black');



