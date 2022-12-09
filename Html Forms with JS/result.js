const paragraph = document.querySelector('#paragraph');

const params = new URLSearchParams(window.location.search);

params.forEach((value, key)=>{
    if (`${key}` == "First Name"){
        paragraph.append(`${key} = ${value} (Length=${value.length})`);
        paragraph.append(document.createElement('br'));
    }
    else if (`${key}` =="Last Name"){
        paragraph.append(`${key} = ${value} (Length=${value.length})`);
        paragraph.append(document.createElement('br'));
    }
    else if (`${key}` =="Email"){
            paragraph.append(`${key} = ${value} (Length=${value.length})`);
            paragraph.append(document.createElement('br'));
    }
    else if (`${key}` =="Gender"){
    paragraph.append(`${key} = ${value}`);
    paragraph.append(document.createElement('br'));
    }
});
    