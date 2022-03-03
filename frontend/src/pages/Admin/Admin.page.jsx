import { Table, Tag, Space } from "antd";
import { Link, useParams } from "react-router-dom";
function JobCreate() {
  const parms = useParams();
  console.log(parms);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="card rounded-0 border-0 shadow">
            <div className="card-body p-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Email</th>
                      <th scope="col">Job Title</th>
                      <th scope="col">Resume</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Najmudheen@gmail.com</th>
                      <td>React developer</td>
                      <td>
                        <Link
                          to="http://localhost:3002/20597pdf-test.pdf"
                          target="_blank"
                          download
                        >
                          resume
                        </Link>
                      </td>
                      <td>
                        <a
                          className="btn btn-primary rounded-0 btn-block"
                          id="insertRow"
                          href="#"
                        >
                          Add new row
                        </a>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <a
                className="btn btn-primary rounded-0 btn-block"
                id="insertRow"
                href="#"
              >
                Add new row
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCreate;
