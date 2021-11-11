import React from 'react';
import PropTypes from 'prop-types';
import { Link } from  'react-router-dom';

function ReferInfo({link, id, title, desc2, desc1, element, use, tag, version, view, definition}){
    return (
        <li>
            <Link to ={{ pathname: "refer-detail", state: {link, id, title, desc2, desc1,element, use, tag, version, view, definition} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{element}</span>
            </Link>
        </li>
    )
}
ReferInfo.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, //제목 : 문자열이라고 설정
    link: PropTypes.string.isRequired, //제목 : 문자열이라고 설정
    desc2: PropTypes.string.isRequired, //제목 : 문자열이라고 설정
    element: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,
    version: PropTypes.string.isRequired,
    use: PropTypes.string.isRequired,
}
export default ReferInfo;