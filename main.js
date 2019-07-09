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