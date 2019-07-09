function getValidBarcodes(allItems, barcodes){
    let validBarcodes = [];
    barcodes.forEach(function(barcode){
        allItems.forEach(function(item){
            if(barcode == item['id'])
                validBarcodes.push(barcode);
        });
    });
    return validBarcodes;
}

function statisticsByBarcode(validBarcodes){
    let statisticsBarcodes = [];
    let isContain = false;
    for(let i = 0; i  < validBarcodes.length; i++){
        for(let j = 0; j < statisticsBarcodes.length; j++){
            if(statisticsBarcodes[j]['id'] === validBarcodes[i]){
                isContain = true;
                statisticsBarcodes[j]['count'] += 1;
                break;
            }
        }
        if(!isContain)
            statisticsBarcodes.push({id:validBarcodes[i],count:1});
        isContain = false;
    }
    return statisticsBarcodes;
}

function createReceipts(allItems, statisticsBarcodes){
    let sum = 0;
    let str = undefined;
    let receipts = 'Receipts\n'+
    '------------------------------------------------------------\n';
    allItems.forEach(function(item){
        statisticsBarcodes.forEach(function(statisticsBarcode){
            if(statisticsBarcode['id'] == item['id']){
                str = '                                            ';
                str = item['name'] + str.substring(item['name'].length, (33-item['price'].toString().length))
                    + item['price']
                    + str.substring(33, (44 - statisticsBarcode['count'].toString().length)) + statisticsBarcode['count']
                    + '\n';
                receipts += str;
                sum += statisticsBarcode['count']*item['price'];
            }
        });
    });
    receipts += '------------------------------------------------------------\n'+
            'Price: '+sum;
    return receipts;
}