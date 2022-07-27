export default function(sortyTable, column, sortOrderObj) {
    const tableBody = sortyTable.tBodies[0];
    const tBodyRows = Array.from(tableBody.rows);

    // use the order value to determine the sort order
    if (sortOrderObj.order === "asc") {

        // sort rows by text content of row element who's index matches the column arg 
        tBodyRows.sort((a, b)=> {
            return Number(a.cells.item(column).textContent) > Number(b.cells.item(column).textContent) ? 1 : -1;
        });

        sortOrderObj.order = "desc";
    }

    else if (sortOrderObj.order === "desc") {
        tBodyRows.sort((a, b)=> {
            return Number(a.cells.item(column).textContent) < Number(b.cells.item(column).textContent) ? 1 : -1;
        });

        sortOrderObj.order = "asc";
    }

    // remove all initial rows 
    tableBody.textContent = "";

    // replace with sorted rows
    tableBody.append(...tBodyRows);
}

export function sortTableAlph(sortyTable, column, sortOrderObj) {
    const tableBody = sortyTable.tBodies[0];
    const tBodyRows = Array.from(tableBody.rows);

    // use the order value to determine the sort order
    if (sortOrderObj.order === "asc") {

        // sort rows by text content of row element who's index matches the column arg 
        tBodyRows.sort((a, b)=> {
            return a.cells.item(column).textContent > b.cells.item(column).textContent ? 1 : -1;
        });

        sortOrderObj.order = "desc";
    }

    else if (sortOrderObj.order === "desc") {
        tBodyRows.sort((a, b)=> {
            return a.cells.item(column).textContent < b.cells.item(column).textContent ? 1 : -1;
        });

        sortOrderObj.order = "asc";
    }

    // remove all initial rows 
    tableBody.textContent = "";

    // replace with sorted rows
    tableBody.append(...tBodyRows);
}
