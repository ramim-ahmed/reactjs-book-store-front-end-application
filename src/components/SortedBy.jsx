export default function SortedBy() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-primary text-white btn-sm btn-wide m-1">
        Sorted By
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <button className="btn btn-sm btn-wide">Item1</button>
        </li>
        <li>
          <button className="btn btn-sm btn-wide">Item1</button>
        </li>
      </ul>
    </div>
  );
}
