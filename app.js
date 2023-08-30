
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data => showData(data));
}

function showData(data){
    
    const dataContainer =  document.createElement('div');
    dataContainer.innerText = "hello Bangaldeh";
    
    for(const post of data){
        const contentDiv = document.createElement('div');
        // console.log(contentDiv);
        // console.log(dataContainer)
        contentDiv.innerText = 'Hello'
        dataContainer.appendChild(contentDiv);
    }


}


