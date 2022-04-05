// stampo card contatto
const renderContacts = (data) => {
    console.log(data)
        let contacts = [];
        let newData = data;
        if(data.length > 0) {
        contacts = data.map((item, index) => 
        {   console.log(newData)
            str = `
        <div id="${item.id}" class="card_contact normal">
            <img class="item_img">
            <h4 class="item_name">${item.name}</h4> 
            <p class="addstar"><i class="fa-regular fa-star add ${item.favorite ? 'fa-solid' : ''}" id="${item.id}"></i></p>
            <p class="item_username"></p> 
            <p class="item_number">${item.phone}</p>
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
        console.log(index, data);
        
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
}










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

