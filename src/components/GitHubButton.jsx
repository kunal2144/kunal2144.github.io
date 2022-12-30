export default function GitHubLogo() {
    return (
      <button id="gitHub-btn" onClick={gitHub}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.8224 0.500061H3.17955C1.70075 0.500061 0.500977 1.69984 0.500977 3.17863V22.8215C0.500977 24.3003 1.70075 25.5001 3.17955 25.5001H22.8224C24.3012 25.5001 25.501 24.3003 25.501 22.8215V3.17863C25.501 1.69984 24.3012 0.500061 22.8224 0.500061ZM15.9753 21.9119C15.5066 21.9956 15.3336 21.7054 15.3336 21.4655C15.3336 21.1641 15.3447 19.6239 15.3447 18.3795C15.3447 17.509 15.0545 16.9565 14.7141 16.6664C16.7789 16.4376 18.9552 16.153 18.9552 12.5871C18.9552 11.5715 18.5925 11.0637 18.001 10.4108C18.0958 10.1708 18.4139 9.1831 17.9061 7.89962C17.1304 7.65966 15.3559 8.8985 15.3559 8.8985C14.6193 8.69203 13.8213 8.586 13.0345 8.586C12.2476 8.586 11.4496 8.69203 10.713 8.8985C10.713 8.8985 8.93848 7.65966 8.16281 7.89962C7.65499 9.17752 7.96749 10.1652 8.06794 10.4108C7.47642 11.0637 7.19741 11.5715 7.19741 12.5871C7.19741 16.1362 9.27888 16.4376 11.3436 16.6664C11.0758 16.9063 10.8358 17.3193 10.7521 17.9108C10.222 18.1507 8.86593 18.5637 8.05678 17.1351C7.54897 16.2534 6.63379 16.1809 6.63379 16.1809C5.72977 16.1697 6.57241 16.7501 6.57241 16.7501C7.17508 17.0291 7.59919 18.1005 7.59919 18.1005C8.14049 19.7579 10.7298 19.1998 10.7298 19.1998C10.7298 19.9755 10.7409 21.2367 10.7409 21.4655C10.7409 21.7054 10.5735 21.9956 10.0992 21.9119C6.41616 20.6786 3.83803 17.1742 3.83803 13.0782C3.83803 7.95542 7.75544 4.06591 12.8782 4.06591C18.001 4.06591 22.1528 7.95542 22.1528 13.0782C22.1583 17.1742 19.6583 20.6842 15.9753 21.9119ZM10.501 18.5023C10.3949 18.5246 10.2945 18.48 10.2833 18.4074C10.2722 18.3237 10.3447 18.2512 10.4508 18.2289C10.5568 18.2177 10.6572 18.2623 10.6684 18.3349C10.6851 18.4074 10.6126 18.48 10.501 18.5023ZM9.97084 18.4521C9.97084 18.5246 9.88714 18.586 9.77553 18.586C9.65276 18.5972 9.56906 18.5358 9.56906 18.4521C9.56906 18.3795 9.65276 18.3181 9.76437 18.3181C9.8704 18.307 9.97084 18.3684 9.97084 18.4521ZM9.20633 18.3907C9.18401 18.4632 9.0724 18.4967 8.97754 18.4632C8.87151 18.4409 8.79897 18.3572 8.82129 18.2847C8.84361 18.2121 8.95522 18.1786 9.05008 18.201C9.16169 18.2344 9.23424 18.3181 9.20633 18.3907ZM8.51995 18.0893C8.46973 18.1507 8.3637 18.1396 8.27999 18.0559C8.19629 17.9833 8.17397 17.8773 8.22977 17.8271C8.27999 17.7657 8.38602 17.7768 8.46973 17.8606C8.54227 17.9331 8.57017 18.0447 8.51995 18.0893ZM8.01214 17.5815C7.96192 17.615 7.86705 17.5815 7.80566 17.4978C7.74428 17.4141 7.74428 17.3193 7.80566 17.2802C7.86705 17.23 7.96192 17.269 8.01214 17.3527C8.07352 17.4364 8.07352 17.5369 8.01214 17.5815ZM7.64942 17.0402C7.59919 17.0905 7.51549 17.0626 7.4541 17.0068C7.39272 16.9342 7.38156 16.8505 7.43178 16.8114C7.482 16.7612 7.56571 16.7891 7.62709 16.8449C7.68848 16.9175 7.69964 17.0012 7.64942 17.0402ZM7.27553 16.6273C7.25321 16.6775 7.18066 16.6887 7.11928 16.6496C7.04674 16.6161 7.01325 16.5547 7.03557 16.5045C7.0579 16.471 7.11928 16.4543 7.19183 16.4822C7.26437 16.5213 7.29785 16.5827 7.27553 16.6273Z" fill="#918E9B"/>
        </svg>
      </button>
    )
}

function gitHub() {
  window.open("https://github.com/kunal2144")
}