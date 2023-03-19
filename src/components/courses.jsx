import { useState } from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {ROUTES} from "./routes";

export const Courses = () => {
  const coursesAll = useLoaderData();
  const {courses} = coursesAll;

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(courses.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % courses.length;
    setItemOffset(newOffset);
  }

  return (
    <div className="container">
      <div className="courses">
        {courses?.slice(itemOffset, endOffset).map((course) => {
          const {id, title, description, previewImageLink, rating, lessonsCount, meta } = course;
          return(          
            <NavLink to={ROUTES.course(id)} className="course" key={id}>
              <h2 className="title">{title}</h2>
              <img className="course__img" src={previewImageLink + '/cover.webp'} alt={title} /> 
              <h3 className="subtitle">{description}</h3>
              <div className="course__info">
                <p>Number of lessons: {lessonsCount}</p>
                <ul>Skills: 
                  {meta.skills?.map((skill, index) => {
                    return(
                      <li key={index}>{skill}</li>
                    );
                  })}
                </ul>
                <p>Rating: {rating}</p>
              </div>
              <video className="course__video" src={meta.courseVideoPreview?.link} controls loop muted></video>
            </NavLink>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
};
