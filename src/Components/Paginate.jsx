import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Card } from './Card/Card';
import { FaStar } from 'react-icons/fa'
import { useSelector } from 'react-redux';



export const Paginate = ({ itemsPerPage, allProducts }) => {

    const data = useSelector((state) => state.allProducts.value)
    const items = data;

    function Items({ currentItems }) {

        return (
            <div className='flex flex-wrap justify-between gap-7.5'>
                {currentItems &&
                    currentItems.map((item) => (
                        <Card
                            key={item.id}
                            img={item.thumbnail}
                            img_title='keyboard'
                            percent={item.discountPercentage}
                            title={item.title}
                            discountPrice={item.price}
                            previousPrice={item.price / (1 - item.price / 100).toFixed(0,2)}
                            review={item.reviews.length}
                        >
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar className='text-gray-300' />
                        </Card>
                    ))}
            </div>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                className='flex gap-2 pt-10'
                pageClassName='px-6.25 py-0.5 bg-black text-white cursor-pointer hover:opacity-80 duration-300'
                activeClassName="bg-red"
            />
        </div>
    )
}
