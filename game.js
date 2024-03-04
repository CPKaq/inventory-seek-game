window.onload = function() {  
    init();
};

itemArray = [];
itemName1 = document.getElementById('item-name-1');
itemName2 = document.getElementById('item-name-2');
clickedItem = -1;
targetItem = -1;
levelId = 0;

function init() {
    var invDOM = document.getElementById('inventory');  

    for (var i = 0; i < 54; i++) {  
        var slotDOM = document.createElement('span');  
        slotDOM.className = 'slot';
        var itemDOM = document.createElement('div');
        itemDOM.className = 'item';
        
        slotDOM.appendChild(itemDOM);
        invDOM.appendChild(slotDOM);  

        slotDOM.addEventListener('click', function(event) {
            clickedItem = Array.prototype.indexOf.call(invDOM.children, event.target.parentNode);
            if (clickedItem == targetItem) {
                levelId++;
                newLevel();
            }
        });
        
        itemArray.push(itemDOM);  
    }

    newLevel();
};

function newLevel() {
    targetItem = Math.floor(Math.random() * 54);
    levelBlock = level[levelId];
    setLevel(levelBlock[0], levelBlock[1]);
    itemName1.textContent = levelBlock[2];
    itemName2.textContent = levelBlock[3];
}

function setLevel(item1, item2) {
    for (var i = 0; i < 54; i++) {
        setItem(itemArray[i], i == targetItem ? item2 : item1);
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
