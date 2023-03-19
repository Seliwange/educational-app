import { useLoaderData, useNavigate, NavLink } from "react-router-dom";

export const WatchLesson = () => {
  const course = useLoaderData();
  const navigate = useNavigate();

  const {title, description, previewImageLink, lessons} = course;

  return (
    <div className="container">
      <button className="btn"                 
        onClick={() => {
          navigate('..');
        }}>
        Go back
      </button>

      <h2 className="title">{title}</h2>
      <p className="subtitle">{description}</p>
      {lessons?.slice(0, 1).map((lesson) => {
        const video = `${previewImageLink}/lesson-${lesson.order}.webp`;
        return (
          <div key={lesson.id}>                
            <h3>{lesson.title}</h3>
            {video ? (
              <video className="lesson__video" url={video}
                controls
                loop
                muted
              />
            ) : (
              <p>Video is not available</p>
            )}
          </div>
        );
      })}

      <h3>List of lessons:</h3>
      <ul className="lesson__list">
        {lessons?.map((lesson) => {
          return(
            <li className="lesson__list-item" key={lesson.id}>
              <NavLink to={previewImageLink + '/' + lesson.order + '.webp'}>{lesson.title}</NavLink>
            </li>
          );
        })}                    
      </ul>
    </div>
  );
};
