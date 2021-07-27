const form=document.getElementById('form');
const ul=document.querySelector('ul');
async function getResults(searchText){
    const url=`http://api.tvmaze.com/search/shows?q=${searchText}`;
    const fetchedData=await fetch(url);
    const data=await fetchedData.json();
    // console.log(data);
    for(let item of data){
        if(item.show.image){
            const img=document.createElement('img');
            img.src=item.show.image.medium;
            img.style.margin='10px';
            ul.append(img);
        }
    }
}




form.addEventListener('submit',(e)=>{
    while(ul.firstChild){
        ul.removeChild(ul.lastChild);
    }
    e.preventDefault();
    const searchText=form.elements[0].value;
    console.log(searchText);
    getResults(searchText);
    form.elements[0].value="";
})