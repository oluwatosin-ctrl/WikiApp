function switcher(){
    const mvr = document.getElementById('mover');
    const btn = document.getElementById('button');
    const output = document.querySelector('#output');
    const body = document.getElementsByTagName("BODY")[0];
    
    if(btn.className == "button day"){
        mvr.style.transform = "translateY(-42px)";
        btn.className = "button night";
        btn.style.boxShadow = "0px 0px 16px rgba(255, 255, 255, 0.25)";
        body.style.backgroundColor = "#0E0E0E";
        output.style.backgroundColor = "#0E0E0E";
        body.style.color = "white";
      } else{
        mvr.style.transform = "translateY(0)";
        btn.className = "button day";
        btn.style.boxShadow = "0px 0px 16px rgba(0, 0, 0, 0.25)";
        body.style.backgroundColor = "white";
        output.style.backgroundColor = "white";
        body.style.color = "Black";
      }
  }
var button = document.querySelector('.buttoni')

button.addEventListener('click',function searchup(s){
    var s = document.querySelector('.inputvalue').value
    var ids = "";
    var links = [];
    var results = [];
    fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='+s)
    .then(response => {
    return response.json();
    })
    .then(result => {
    results = result.query.search;
    for(var i=0; i<results.length; i++){
    if(results[i+1] != null){
    ids += results[i].pageid+"|";
    }
    else{
    ids+=results[i].pageid;
    }
    }
    })
    .then(a => {
    fetch("https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&origin=*&format=json&pageids="+ids)
    .then(idresult => {
    return idresult.json();
    })
    .then(idresult =>{
    for(i in idresult.query.pages){
    links.push(idresult.query.pages[i].fullurl);
    }
    })
    .then(g =>{
    document.getElementById("search-results").innerHTML="<br>";
    for(var i=0; i<results.length; i++){
    document.getElementById("search-results").innerHTML+="<a href='"+links[i]+"' target='_blank'>"+results[i].title+"</a><br>"+results[i].snippet+"<br><br><br><br>";
    }
    });
    });
    
    })