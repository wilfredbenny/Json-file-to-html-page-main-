import myJson from './1.json' assert {type: 'json'};
// console.log(myJson);
const html = myJson.map(item => {
    return `
        <tr>
          <td class="col-xs-4">${item['name']}</td>
          <td class="col-xs-4">${item['email']}</td>
          <td class="col-xs-4">${item['salary']}</td>
        <tr>` ;
});

document.getElementById("table_body").innerHTML = html.join('');