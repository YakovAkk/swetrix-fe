import React from 'react'
import cx from 'clsx'
import PropTypes from 'prop-types'

const Wix = ({ theme, className }: {
  theme: 'dark' | 'light',
  className?: string,
}): JSX.Element => (
  <svg
    className={cx(className, {
      'fill-white': theme === 'dark',
      'fill-slate-800': theme === 'light',
    })}
    x='0'
    y='0'
    viewBox='0 0 311 121'
  >
    <title>
      Wix
    </title>
    <path d='M178 2.3c-6 3-8.6 8.6-8.6 23.8 0 0 3-3 7.8-4.8 3.5-1.3 6-3 7.8-4.3 5.2-3.9 6-8.6 6-16.8C190.9 0.2 182.7-0.3 178 2.3z' />
    <path d='M141.3 5.8c-5.2 4.3-6.5 11.7-6.5 11.7l-16.8 64.4 -13.8-52.7c-1.3-5.6-3.9-12.5-7.8-17.3C91.6 5.8 81.6 5.4 80.4 5.4c-0.9 0-10.8 0.4-16 6.5 -3.9 4.8-6.5 11.7-7.8 17.3l-13 52.7L26.8 17.5c0 0-1.3-6.9-6.5-11.7C12.1-1.6 0 0.2 0 0.2l32 120.5c0 0 10.4 0.9 15.6-1.7 6.9-3.5 10.4-6 14.3-22.5 3.9-14.7 14.3-57.5 15.1-60.5 0.4-1.3 1.3-5.2 3.9-5.2 2.6 0 3.5 3.5 3.9 5.2 0.9 3 11.2 45.8 15.1 60.5 4.3 16.4 7.3 19 14.3 22.5 5.2 2.6 15.6 1.7 15.6 1.7L161.6 0.2C161.6 0.2 149.5-1.5 141.3 5.8z' />
    <path d='M190.9 19.6c0 0-2.2 3-6.5 5.6 -3 1.7-5.6 2.6-8.6 4.3 -5.2 2.6-6.5 5.2-6.5 9.1v1.3 6.5l0 0v1.3 72.6c0 0 8.2 0.9 13.4-1.7 6.9-3.5 8.2-6.9 8.2-21.6V24.4l0 0L190.9 19.6 190.9 19.6z' />
    <path d='M270.4 60.7L311 0.6c0 0-16.8-3-25.5 4.8 -5.6 4.8-11.2 13.8-11.2 13.8l-14.7 21.6c-0.9 1.3-1.7 2.2-3 2.2s-2.6-1.3-3-2.2l-14.7-21.6c0 0-6-8.6-11.2-13.8 -8.6-7.8-25.5-4.8-25.5-4.8l39.3 60 -40.2 60c0 0 17.7 2.2 26.4-5.6 5.6-4.8 10.8-13 10.8-13l14.7-21.6c0.9-1.3 1.7-2.2 3-2.2s2.6 1.3 3 2.2l14.7 21.6c0 0 5.6 8.2 10.8 13 8.6 7.8 25.9 5.6 25.9 5.6L270.4 60.7z' />
  </svg>
)

Wix.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string.isRequired,
}

Wix.defaultProps = {
  className: '',
}

export default Wix
