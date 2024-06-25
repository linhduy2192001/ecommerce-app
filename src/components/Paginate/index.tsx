import classNames from "classnames";
import { Link } from "react-router-dom";

const Paginate = ({ page, totalPage }: { page: number; totalPage: number }) => {
  return (
    <nav className="d-flex justify-content-center justify-content-md-end">
      <ul className="text-gray-400 pagination pagination-sm">
        {page === 1 ? (
          <li className="page-item">
            <span className="page-link page-link-arrow disabled">
              <i className="fa fa-caret-left" />
            </span>
          </li>
        ) : (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={`?page=${page - 1}`}
            >
              <i className="fa fa-caret-left" />
            </Link>
          </li>
        )}

        {Array(totalPage)
          .fill(0)
          .map((_, i) => {
            const pageNumber = i + 1;
            const isActive = page === pageNumber;
            return (
              <li
                className={classNames("page-item ", { active: isActive })}
                key={pageNumber}
              >
                <Link className="page-link" to={`?page=${pageNumber}`}>
                  {pageNumber}
                </Link>
              </li>
            );
          })}

        {page === totalPage ? (
          <li className="page-item">
            <span className="page-link page-link-arrow disabled">
              <i className="fa fa-caret-right" />
            </span>
          </li>
        ) : (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={`?page=${page + 1}`}
            >
              <i className="fa fa-caret-right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginate;
