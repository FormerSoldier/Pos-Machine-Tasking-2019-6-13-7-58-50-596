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