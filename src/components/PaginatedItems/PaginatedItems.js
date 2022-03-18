import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const PaginatedItems = ({ itemsPerPage, filteredData }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect =
        (() => {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(filteredData.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(filteredData.length) / itemsPerPage);
        },
        [itemOffset, itemsPerPage]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % filteredData.length;
        setItemOffset(newOffset);
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    );
};

export default PaginatedItems;
