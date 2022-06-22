function Create(){
    let container = document.getElementById("container");
    container.innerHTML=`<form id="Background">
    <h1 id="Head">Color Change</h1>
    <label>Name:
    <input id="Name" type="text" placeholder="Enter Name">
    </input>
    <br>
    <br>
    </label>
    <label class="Color">RGB:
         <input id="color" type="text" placeholder="Enter RGB">
        </input>
        </label>
        <br>
        <br>
        <button id="Button" type="button">Converter</button>
    </form>`
}
    Create()
    const btnDisplay = document.querySelector('#Button');
    let name = document.querySelector('#Name').value;
    let lists = JSON.parse( localStorage.getItem('records')) ?
    JSON.parse( localStorage.getItem('records')) : [
        {
            name: 'Lerato',
            color: '(124,0,23)'
        }
    ];
    function addData() {
        // e.preventDefault();
    }
    document.querySelector('#Button').addEventListener('click', ()=>{
    let background=document.getElementById('container');
    let color =  document.querySelector('#color').value;
        lists.push(
            {
                name: document.getElementById('Name').value,
                 color:document.querySelector('#color').value
            }
        );
        // Save data to a localstorage
        localStorage.setItem('records',JSON.stringify(lists));
        background.style=`background-color:${color}`
        function loadData() {
            console.table(lists);
        };
        loadData()
    });
    // Displaying data
    localStorage.clear()









