export function exportCSVFile(headers, totalData, fileTitle){
    if(!totalData || !totalData.length){
        return null
    }
    const accountJsonObject = JSON.stringify(totalData)
    const result = convertToCSV(accountJsonObject, headers)
    if(!result){
        return null
    }
    const blob = new Blob([result])
    const exportedFileName = fileTitle? fileTitle+'.csv':'export.csv'
    
    const link = window.document.createElement('a')
    if(link.download !== undefined){
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFileName);
        link.style.visibility='hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
}

function convertToCSV(accountData, headers){
    //console.log('--accountData--'+accountData);
    const columnDelimiter = ',';
    const lineDelimiter = '\r\n';
    const actualHeaderKey = Object.keys(headers);
    const headerToShow = Object.values(headers);
    
    let str = '';
    str+=headerToShow.join(columnDelimiter);
    str+=lineDelimiter;
    const data = typeof accountData !=='object' ? JSON.parse(accountData):accountData;
    data.forEach(obj=>{
        let line ='';
        actualHeaderKey.forEach(key=>{
            if(line !=''){
                line+=columnDelimiter;//after each headerkey add a columndelimitor
            }
            
            let strItem = obj[key] ? obj[key]+'': '';
            //console.log('--strItem--'+strItem);
            //check if comma, replace the comma with space
            line+=strItem? strItem.replace(/,/g, ''):strItem;
            //console.log('--line--'+line);
        })
        str+=line+lineDelimiter;
        //console.log('--Final String--'+str);
    })
    return str;
}