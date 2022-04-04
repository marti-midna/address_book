// stampo card contatto
const renderContacts = (data) => {

    const contacts = data.map((item, index) => 
        `
        <div id="${item.id}" class="card_contact">
            <h4 class="item_name">${item.name}</h4>
            <p class="addstar"><i class="fa-regular fa-star add" onclick="addStar(${index})" id="${item.id}"></i></p>
            <p class="item_username"></p> 
            <p class="item_number">${item.phone}</p>
        </div>
        <div class="separate"></div>
        `
    
    );

    document.querySelector('.contact_list').innerHTML = contacts.join('');

    

}


//chiamata tramite API

const URL = "https://jsonplaceholder.typicode.com/users";


const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    renderContacts(data);
    return data;
}

getData().then(data => 
    // filtro le card
    document.querySelector('#search').addEventListener('keyup', () => {
    const userSearch = document.querySelector('#search').value;
    
    let filteredList = data.filter((element) => {
            if (element.name
                .toLowerCase().trim().includes(userSearch.toLowerCase().trim()) ||
                
                element.email
                .toLowerCase().trim().includes(userSearch.toLowerCase().trim()) ||

                element.username
                .toLowerCase().trim().includes(userSearch.toLowerCase().trim())
                ){
                return element
            } else if (
                element.name
                .toLowerCase().trim() != userSearch.toLowerCase().trim() ||

                element.email
                .toLowerCase().trim() != userSearch.toLowerCase().trim() ||

                element.username
                .toLowerCase().trim() != userSearch.toLowerCase().trim()
                ){  
                    console.log('nessun contatto'); /* ?????? */
                    let risposta = document.getElementById('contact_list')
                    risposta.innerHTML = 'fdbvnieubfnrivjernbiuernbiuernbuierubeirubnieurnbieur';
            }
            
    });

    renderContacts(filteredList);

    // aggiungo stella solid a contatto

    document.querySelector('.add').addEventListener('click', addStar);

    function addStar(index) {
        var element = document.querySelector('.add');
        element.classList.add("fa-solid");
    }
    
}));