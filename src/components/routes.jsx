export const ROUTES = {
  courses: "/",
  course: (id = null) => (id ? `/${id}` : "/:courseId"),
};