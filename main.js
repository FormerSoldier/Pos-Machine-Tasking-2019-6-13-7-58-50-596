var isValidBarcodes = (allItems, barcodes) => {
    let result = undefined;
    let contain = false;
    barcodes.forEach(function(barcode){
        allItems.forEach(function(item){
            if(barcode == item['id']){
                contain = true;   
                return ;
            }                        
        });
        if(!contain)
            result =  "[ERROR]: the barcode is not exist";
        contain = false;
    });
    return result;
}

var statisticsByBarcode = (barcodes) => {
    let statisticsBarcodes = [];
    let isContain = false;
    for(let i = 0; i  < barcodes.length; i++){
        for(let j = 0; j < statisticsBarcodes.length; j++){
            if(statisticsBarcodes[j]['id'] === barcodes[i]){
                isContain = true;
                statisticsBarcodes[j]['count'] += 1;
                break;
            }
        }
        if(!isContain)
            statisticsBarcodes.push({id:barcodes[i],count:1});
        isContain = false;
    }
    return statisticsBarcodes;
}

var createReceipts = (allItems, statisticsBarcodes) => {
    var sum = 0;
    let receipts = 'Receipts\n'+
    '------------------------------------------------------------\n';
    allItems.forEach(function(item){
        statisticsBarcodes.forEach(function(statisticsBarcode){
            if(statisticsBarcode['id'] == item['id']){
                receipts += `${item['name']}  ${item['price']} ${statisticsBarcode['count']}\n`;
                sum += statisticsBarcode['count']*item['price'];
            }
        });
    });
    receipts += `------------------------------------------------------------\nPrice: ${sum}`;
    return receipts;
}

var printReceipt = (allItems, barcodes) => {
    isValidBarcodes(allItems, barcodes);
    let statisticsBarcodes = statisticsByBarcode(barcodes);
    return createReceipts(allItems,statisticsBarcodes);
}

module.exports = {
    isValidBarcodes,
    statisticsByBarcode,
    createReceipts,
    printReceipt
};