const poisciGradivo = async (plainText, location) => {
    //TODO translate plainText
   
   
   
    let url = new URL('https://platform.x5gon.org/api/v1/search')
    let params = {text:plainText ,type: "all",page: 1}
    url.search = new URLSearchParams(params).toString();
    let response = await fetch(url);
    let myJson = await response.json(); //extract JSON from the http response
    let materials = myJson.rec_materials;
    for (let i = 0; i< materials.length; i++){
        let material = materials[i];
        let materialUrl = material.url;
        let materialTitle = material.title;
        console.log(materialTitle + " : " + materialUrl);
       
        //TODO formatirati title pa url v HTML
        location.innerHTML += "<p>" + materialTitle + "<a href=" + materialUrl +" target=\"_blank\"><i class=\"fa fa-external-link\"></i></a></p>";
 
        if(i>5)
            break;
    }
}
 
 
document.head.innerHTML += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
document.head.innerHTML += '<style>td p { padding: 5px 0 0 0; font-size: 12pt; } .fa.fa-external-link { margin-left:4px; font-size: 14px; }</style>';
 
var rows = document.getElementsByTagName("table")[0].rows;
 
var naslov = rows[3].getElementsByTagName("td")[1];
var opis = rows[4].getElementsByTagName("td")[1];
 
poisciGradivo(naslov.innerText, naslov)
poisciGradivo(opis.innerText, opis)