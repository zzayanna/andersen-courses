// Prototype Inheritance

function Grid (isScrollable, rows, columns) {
    this.isScrollable = isScrollable;
    this.rows = rows;
    this.columns = columns;
}

Grid.prototype.getTableSize = function () {
    return `${this.rows} x ${this.columns}`;
}

Grid.prototype.scrollOnOff = function () {
    (this.isScrollable) ? 
        this.isScrollable = false : this.isScrollable = true; 
}

Grid.prototype.addRow = function () {
    this.rows += 1;
}

Grid.prototype.calcRows = function () {
    return this.rows;
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

function User(isScrollable, rows, columns, data, background) {
    Grid.call(this, isScrollable, rows, columns);
    this.data = data;
    this.background = background;
}

User.prototype = Object.create(Grid.prototype);

User.prototype.changeBackground = function (newBackground) {
    this.background = newBackground;
}

User.prototype.sortByName = function () {
    return this.data.sort((a, b) => (a.name > b.name) ? 1 : -1);
}

User.prototype.showAdmins = function () {
    return this.data.filter(item => item.isAdmin === true);
}

User.prototype.findUserByName = function (name) {
    return this.data.find(item => item.name === name);
}

User.prototype.addRow = function (newRow) {
    Grid.prototype.addRow.call(this);
    this.data.push(newRow);
}

User.prototype.calcRows = function () {
    return this.showAdmins().length;
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


function Order(isScrollable, rows, data, borderColor) {
    Grid.call(this, isScrollable, rows);
    this.columns = 3;
    this.data = data;
    this.borderColor = borderColor;
}

Order.prototype = Object.create(Grid.prototype);

Order.prototype.changeBorderColor = function (newColor) {
    this.borderColor = newColor;
}

Order.prototype.showCompletedOrders = function () {
    return this.data.filter(item => item.isCompleted === true);
}

Order.prototype.findOrderById = function (id) {
    return this.data.find(item => item.id === id);
}

Order.prototype.changeStatus = function (id) {
    const orderFound = this.findOrderById(id);
    (orderFound.isCompleted) ? 
        orderFound.isCompleted = false : orderFound.isCompleted = true; 
}

Order.prototype.addRow = function (newRow) {
    Grid.prototype.addRow.call(this);
    newRow.isCompleted = false;
    this.data.push(newRow);
}

Order.prototype.calcRows = function () {
    return this.showCompletedOrders().length;
}

const order1 = new Order(true, 4, dataForOrderTable, 'black');

