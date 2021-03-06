// stampo card contatto
const renderContacts = (data) => {
    console.log(data)
        let contacts = [];
        if(data.length > 0) {
        contacts = data.map((item, index) => 
        `
        <div id="${item.id}" class="card_contact">
            <h4 class="item_name">${item.name}</h4>
            <p class="addstar"><i class="fa-regular fa-star add" onclick="addStar(${item.id})" id="${item.id}"></i></p>
            <p class="item_username"></p> 
            <p class="item_number">${item.phone}</p>
        </div>
        <div class="separate"></div>
        `
    );
    } else {
        contacts = [
            `
            <div id="" class="nulla">
                <p>800A</p>
            </div>
            `
        ]
    }
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

    //aggiungo stella solid

    // document.querySelector('.add').addEventListener('click')
}));