import React from 'react'

let RemoveLink = ({ onClick }) => {
  return (
    <button className="fs-editor-toolbar-button" onClick={onClick}>
      <svg viewBox="0 0 1025 1024">
        <path
          d="M476.928 675.104c4.576 9.056 6.976 19.168 6.976 29.696 0 17.6-6.752 34.048-19.008 46.304l-163.392 163.392c-12.256 12.256-28.704 18.976-46.304 18.976s-34.048-6.752-46.304-18.976l-99.392-99.392c-12.256-12.256-19.008-28.704-19.008-46.304s6.752-34.048 19.008-46.304l163.392-163.392c12.256-12.256 28.704-18.976 46.304-18.976 10.528 0 20.64 2.432 29.696 6.976l65.344-65.344c-27.872-21.408-61.44-32.16-95.04-32.16-40 0-79.968 15.168-110.304 45.504l-163.392 163.392c-60.672 60.672-60.672 159.936 0 220.608l99.392 99.392c30.336 30.336 70.304 45.504 110.304 45.504s79.968-15.168 110.304-45.504l163.392-163.392c55.808-55.808 60.224-144.288 13.344-205.344l-65.344 65.344zM978.528 144.896l-99.392-99.392c-30.336-30.336-70.304-45.504-110.304-45.504s-79.968 15.168-110.304 45.504l-163.392 163.392c-55.808 55.808-60.224 144.288-13.344 205.344l65.344-65.344c-4.544-9.056-6.976-19.168-6.976-29.696 0-17.6 6.752-34.048 18.976-46.304l163.392-163.392c12.256-12.256 28.704-19.008 46.304-19.008s34.048 6.752 46.304 19.008l99.392 99.392c12.256 12.256 18.976 28.704 18.976 46.304s-6.752 34.048-18.976 46.304l-163.392 163.392c-12.256 12.256-28.704 19.008-46.304 19.008-10.528 0-20.64-2.432-29.696-6.976l-65.344 65.344c27.872 21.408 61.44 32.16 95.04 32.16 40 0 79.968-15.168 110.304-45.504l163.392-163.392c60.672-60.672 60.672-159.936 0-220.608zM233.408 278.624l-192-192 45.248-45.248 192 192zM384.032 0l64 0 0 192-64 0zM0.032 384l192 0 0 64-192 0zM790.656 745.376l192 192-45.248 45.248-192-192zM576.032 832l64 0 0 192-64 0zM832.032 576l192 0 0 64-192 0z"
          p-id="2524"
          fill="#515151"
        />
      </svg>
    </button>
  )
}

export default RemoveLink