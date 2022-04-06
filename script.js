// stampo card contatto
let contacts = [];

const renderContacts = (data) => {
        
        if(data.length > 0) {
        contacts = data.map((item, index) => 
        {   
            str = `
        <div id="${item.id}" class="card_contact normal">
            <div class="credenziali">
                <div class="img_container">
                    <img class="item_img">
                </div>
                <div class="user_container">
                    <h4 class="item_name">${item.name}</h4> <p class="item_username">${item.username}</p>
                    <p class="item_number">${item.phone}</p>
                </div>
            </div>

            <div class="addstar">
                <i class="fa-regular fa-star add ${item.favorite ? 'fa-solid' : ''}" id="${item.id}"></i>
            </div> 
            
        </div>
        <div class="separate"></div>
        `;
            return str
        }
    );
    } else {
        
        contacts = [
            `
            <div id="" class="nulla">
                <p>Nessun Contatto</p>
            </div>
            `
        ]
        
    }
    document.querySelector('.contact_list').innerHTML = contacts.join('');

    document.querySelectorAll('.add').forEach((element, index) => {
        element.addEventListener('click', () =>{

        
        const newData = data.map((element) => {
            if(element.id === index+1){
               return {...element, favorite: !element.favorite}; 
            } else {
                return element
            }
            
        });
        renderContacts(newData);
        })
        
    }) 

    /* START SEZIONE PREFERITI */
    // FavoriteList = [];
    let FavoriteList = data.filter(function (el) {
        return el.favorite === true;
    });

    console.log(FavoriteList);
    // document.getElementById('Preferiti').innerHTML = FavoriteList.join('');
    // renderContacts(FavoriteList);

    
}








//sezione contatti aperta di default
document.getElementById("defaultOpen").click();


/* MOSTRA SEZIONI INTERESSATE*/
function openSection(event, nomeSezione) {

    let i, tabcontent, tablinks;

    //nascondi tutti gli elementi con class tabcontent
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].getElementsByClassName.display = 'none';
    }

    //rimuovo la classe active
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace('active', '')
    }

    //aggiungi classe active alla sezione mostrata dopo aver cliccato
    document.getElementById(nomeSezione).style.display = "block";
    event.currentTarget.className += "active";

}
/* END MOSTRA SEZIONI INTERESSATE*/










//chiamata tramite API

const URL = "https://jsonplaceholder.typicode.com/users";


const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    
    const newData = data.map((element) => {
        return {...element, favorite: false};
    });
    renderContacts(newData);
    return newData;
}

getData().then(data => 
    // filtro le card
    document.querySelector('#search').addEventListener('keyup', () => {
    const userSearch = document.querySelector('#search').value;
    let filteredList  = [];
        filteredList = data.filter((element) => {
            if (element.name
                .toLowerCase().trim().includes(userSearch.toLowerCase().trim()) ||
                
                element.email
                .toLowerCase().trim().includes(userSearch.toLowerCase().trim()) ||

                element.username
                .toLowerCase().trim().includes(userSearch.toLowerCase().trim())
                ){
                return element
            } 
            
    });

    renderContacts(filteredList);
    
    
    






}));

