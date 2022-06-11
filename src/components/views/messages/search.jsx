
import React from 'react';
import SearchSVG from '../../header/svgFiles/searchSVG';
const Search = () => {
    return (
        <>
            <div className="mb-6">
                <form action="#">
                    <div className="input-group">
                        <div className="input-group-text">
                            <div className="icon icon-lg">
                                <SearchSVG />
                            </div>
                        </div>

                        <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages or users" aria-label="Search for messages or users..." />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search;