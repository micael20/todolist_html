// Immediately Invoked Function Expression (IIFE)
(() => {
    // State variables
    let toDoListArray = [];
    
    // UI variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form input");
    const ul = document.querySelector(".toDoList");
    
    // Event listeners
    form.addEventListener("submit", (e) => {
        // Prevent default behavior - Page reload
        e.preventDefault();
        
        // Give item a unique ID
        let itemId = String(Date.now());
        
        // Get/assign input value
        let toDoItem = input.value;
        
        // Pass ID and item into functions
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        
        // Clear the input box (this is default behavior but we got rid of that)
        input.value = "";
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return; // User clicked on something else
        
        // Pass id through to functions
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    // Functions
    function addItemToDOM(itemId, toDoItem) {
        // Create an li
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        
        // Add toDoItem text to li
        li.innerText = toDoItem;
        
        // Add li to the DOM
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        // Add item to array as an object with an ID so we can find and delete it later
        toDoListArray.push({ itemId, toDoItem });
        console.log(toDoListArray);
    }

    function removeItemFromDOM(id) {
        // Get the list item by data ID
        let li = document.querySelector('[data-id="' + id + '"]');
        
        // Remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        // Create a new toDoListArray with all li's that don't match the ID
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
        console.log(toDoListArray);
    }
})();
