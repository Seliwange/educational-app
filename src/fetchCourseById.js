const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0';
const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM';
const token = [header, body, signature].join('.');
const config = {
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json; charset=utf-8',
  },
  withCredentials: true,
}

export async function fetchCourseById (id) {
  const api = `https://api.wisey.app/api/v1/core/preview-courses/${id}`;
  const data = await fetch(api, config).then((res) => res.json());
  return data;
};

export const fetchCourseByIdRouted = ({ params: { courseId } }) => fetchCourseById(courseId);