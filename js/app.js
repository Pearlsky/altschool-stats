import sortTable, {sortTableAlph} from './sortTables.js' 

function init() {
    openMenu(document.querySelector(".menu__open"), document.querySelector(".menu__panel"));

    closeMenu(document.querySelector(".menu__close"), document.querySelector(".menu__panel"));

    sortAlph();
    // sortNum();
}

// display menu panel on clicking menu icon

function openMenu (openBtn, menu){
    openBtn.addEventListener("click", (e)=> {
        menu.style.setProperty('transform', 'translateX(0%)');
    });    
} 

// close menu panel on clicking the close icon

function closeMenu(closeBtn, menu) {
    closeBtn.addEventListener("click", (e)=> {
        menu.style.setProperty('transform', 'translateX(-100%)');
    });
}

// sort a table by clicking the sort icon 

function sortAlph() {
    const tutorsSort = document.getElementById("tutors-sort");
    const tracksSort = document.getElementById("tracks-sort");
    const studentsSort = document.getElementById("students-sort");

    

    function findNSortAlphTable(button, num = 4) {
        const sortableOrder = {
            order: "asc",
        };

        if (num === 5) {
            button.addEventListener("click", (e) => {
                const table = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                const sortableCol = e.target.parentElement.cellIndex;
                sortTableAlph(table, sortableCol, sortableOrder);
            });
        }

        else {
            button.addEventListener("click", (e) => {
                const table = e.target.parentElement.parentElement.parentElement.parentElement;
                const sortableCol = e.target.parentElement.cellIndex;
                sortTableAlph(table, sortableCol, sortableOrder);
            });
        } 
    };

    findNSortAlphTable(tutorsSort, 5);
    findNSortAlphTable(tracksSort);
    findNSortAlphTable(studentsSort);
}

// function sortNum() {
//     const modSort = document.getElementById("mod-sort");

//     function findNSortNumTable(button, num = 4) {
//         const sortableOrder = {
//             order: "asc",
//         };

//         if (num === 5) {
//             button.addEventListener("click", (e) => {
//                 const table = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
//                 const sortableCol = e.target.parentElement.cellIndex;
//                 sortTable(table, sortableCol, sortableOrder);
//             });
//         }

//         else {
//             button.addEventListener("click", (e) => {
//                 const table = e.target.parentElement.parentElement.parentElement.parentElement;
//                 const sortableCol = e.target.parentElement.cellIndex;
//                 sortTable(table, sortableCol, sortableOrder);
//             });
//         } 
//     };

//     findNSortNumTable(modSort, 5);
// }

init();
