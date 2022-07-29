import sortTable, {sortTableAlph} from './sortTables.js' 

function init() {
    openMenu(document.querySelector(".menu__open"), document.querySelector(".menu__panel"));

    closeMenu(document.querySelector(".menu__close"), document.querySelector(".menu__panel"));

    selectTab()

    sortAlph();
    sortNum();
}

// display menu panel on clicking menu icon

function openMenu (openBtn, menu){
    openBtn.addEventListener("click", (e)=> {
        menu.style.setProperty('display', 'block');
    });    
} 

// close menu panel on clicking the close icon

function closeMenu(closeBtn, menu) {
    closeBtn.addEventListener("click", (e)=> {
        menu.style.setProperty('display', 'none');
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
                const sortableCol = e.target.parentElement.parentElement.cellIndex;
                sortTableAlph(table, sortableCol, sortableOrder);
            });
        }

        else {
            button.addEventListener("click", (e) => {
                const table = e.target.parentElement.parentElement.parentElement.parentElement;
                const sortableCol = e.target.parentElement.parentElement.cellIndex;
                sortTableAlph(table, sortableCol, sortableOrder);
            });
        } 
    };

    findNSortAlphTable(tutorsSort, 5);
    findNSortAlphTable(tracksSort);
    findNSortAlphTable(studentsSort);
}

function sortNum() {
    const modSort = document.getElementById("mod-sort");

    function findNSortNumTable(button, num = 4) {
        const sortableOrder = {
            order: "asc",
        };

        if (num === 5) {
            button.addEventListener("click", (e) => {
                const table = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                const sortableCol = e.target.parentElement.parentElement.cellIndex;
                sortTable(table, sortableCol, sortableOrder);
            });
        }

        else {
            button.addEventListener("click", (e) => {
                const table = e.target.parentElement.parentElement.parentElement.parentElement;
                const sortableCol = e.target.parentElement.parentElement.cellIndex;
                sortTable(table, sortableCol, sortableOrder);
            });
        } 
    };

    findNSortNumTable(modSort, 5);
}

// toggle tabs and tabpanels
function selectTab() {
    let tabs = Array.from(document.querySelector(".menu__list").children);

    let tabpanels = document.querySelectorAll(".tab");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", (e) => {
            
            tabpanels.forEach((el, i) => {
                if(index === i) {
                    el.removeAttribute("hidden");
                }

                else if(index !== i) {
                    el.setAttribute("hidden", "");
                }
            });
        });
    });
}

init();





// ACCESSIBILITY 