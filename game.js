window.onload = function() {  
    init();
};

level = [
    ['Copper Ingot', 'Brick'],
    ['Bamboo', 'Stick'],
    ['Granite', 'Dirt'],
    ['Block of Coal', 'Black Concrete']
]

itemArray = [];

function init() {
    var invDOM = document.getElementById('inventory');  


    for (var i = 0; i < 54; i++) {  
        var slotDOM = document.createElement('span');  
        slotDOM.className = 'slot';
        var itemDOM = document.createElement('div');
        itemDOM.className = 'item';
        setItem(itemDOM, block = 'Copper Ingot');
        
        slotDOM.appendChild(itemDOM);
        invDOM.appendChild(slotDOM);  

        slotDOM.addEventListener('click', function(event) {  
            console.log(Array.prototype.indexOf.call(invDOM.children, event.target.parentNode));
        });
        
        itemArray.push(itemDOM);  
    }

    levelBlock = level[3];

    setLevel(levelBlock[0], levelBlock[1]);
};

function setLevel(item1, item2) {
    var randomNum = Math.floor(Math.random() * 54);
    for (var i = 0; i < 54; i++) {
        setItem(itemArray[i], i == randomNum ? item2 : item1);
    }
}
    
function setItem(item, block) {
    var id = ids[block] - 1;
    var row = (id >> 5);
    var col = (id & 31);

    item.style.backgroundPosition = `-${col << 5}px -${row << 5}px`;
}

function delItem(slot) {
    for (const child of slot.children) {
        child.remove();
    }
}
