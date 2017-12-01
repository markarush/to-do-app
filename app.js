function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteChecked = document.getElementById('deleteChecked');

  deleteChecked.addEventListener('click', () => {
    toDoList = remove(newToDoText.id);
    renderTheUI();
  });
// }

      //node.parentNode.removeChild(node);
      //console.log(deleteChecked);
      // Grab all checkboxes, loop over each one, and see if it is checked.
      // If it is NOT checked, do nothing with it.
      // If it IS checked, we need to remove its parent <li> from the <ul>.
      // Hints:
      //  .checked (boolean) property on checkbox elements
      //  .parentElement (HTMLElement) property on all elements
      //  Google how to remove child element (li) from a parent (ul) in JavaScript
//  }, false);



  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}


window.onload = function() {
  onReady();
}
