// import React from 'react';
// import { NavLink } from 'react-router-dom';
// // import "../css/Sidebar.css"
// const Sidebar = () => {
//   return (
//     // <div className="sidebar" style={{ height: '150vh' }}>
//     //   <NavLink exact to="/blogpage" activeClassName="side-active" className="sidebar-link">
//     //     Blog
//     //   </NavLink>
//     //   <NavLink to="/video" activeClassName="side-active" className="sidebar-link">
//     //     Video
//     //   </NavLink>
//     //   <NavLink to="/qna" activeClassName="side-active" className="sidebar-link">
//     //     Q&A
//     //   </NavLink>
//     // </div>
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-12 d-flex justify-content-center align-items-center">
//             <div className="black-box" style={{ width: '300px', height: '700px' }} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React from 'react'
import { TbBrandBlogger } from 'react-icons/tb'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { MdQuestionAnswer } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            {/* <div className="black-box rounded-2 shadow-5" style={{ width: '180px', height: '180px', backgroundColor: 'black', marginTop: '-10px' }}> */}
            <div className="list-group transparent " style={{ backgroundColor: 'black', marginTop: '28px', width: '180px', height: '100px' }}>
              <a href="/blogpage" className="list-group-item list-group-item-action text-white" style={{ backgroundColor: 'black', borderTop: '0px' }}>
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1">
                    <TbBrandBlogger /> {' '}Blogs
                  </h6>
                </div>
              </a>
              <a href="/videopage" className="list-group-item list-group-item-action text-white" style={{ backgroundColor: 'black' }}>
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1">
                    <AiOutlineVideoCameraAdd />{' '}Videos
                  </h6>
                </div>
              </a>
              <a href="/qna" className="list-group-item list-group-item-action text-white" style={{ backgroundColor: 'black', borderBottom: '0px' }}>
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1">
                    <MdQuestionAnswer />{' '}Forum
                  </h6>
                </div>
              </a>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Sidebar