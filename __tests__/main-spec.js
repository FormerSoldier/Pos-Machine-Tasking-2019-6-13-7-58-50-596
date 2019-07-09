const obj = require('../main');
const allItems = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

it('should return undefined when call isValidBarcodes given allItems, ["0001", "0003", "0005", "0003"]',() =>{
    expect(obj.isValidBarcodes(allItems, ['0001', '0003', '0005', '0003'])).toBe(undefined);
});

it('should return "[ERROR]: the barcode is not exist" when call isValidBarcodes given allItems, ["0001",  "1001"]',() =>{
    expect(obj.isValidBarcodes(allItems, ['0001', '1001'])).toBe('[ERROR]: the barcode is not exist');
});

it('should return "[{id:0001,count:1},{id:0003,count:2}]" when call statisticsByBarcode given allItems, ["0001","0003","0003"]',() =>{
    expect(obj.statisticsByBarcode(['0001', '0003', '0003'])).toBe('[{id:"0001",count:1},{id:"0003",count:2}]');
});

it('should return \nReceipts\n'+
"------------------------------------------------------------\n"+
"Coca Cola                       3          1\n"+
"Pepsi-Cola                      5          2\n"+
"Dr Pepper                       7          1\n"+
"------------------------------------------------------------\n"+
'Price: 20\n when call statisticsByBarcode given allItems, [{id:0001,count:1},{id:0003,count:2},{id:0005,count:1}]',() =>{
    expect(obj.createReceipts(allItems, [{id:'0001',count:1},{id:'0003',count:2},{id:'0005',count:1}])).toBe('Receipts\n'+
    '------------------------------------------------------------\n'+
    'Coca Cola                       3          1\n'+
    'Pepsi-Cola                      5          2\n'+
    'Dr Pepper                       7          1\n'+
    '------------------------------------------------------------\n'+
    'Price: 20');
});