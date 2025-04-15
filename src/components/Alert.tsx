import Swal from 'sweetalert2';

const CommingsoonAlert = () => {
    
    Swal.fire({
      title: 'Coming Soon.',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: "#fff url('src/assets/trees.png')",
      backdrop: `
        rgba(0,0,123,0.4)
        url('src/assets/nyan-cat.gif')
        left top
        no-repeat
      `
    });
  };

const ErrorAlert = () => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
};

export { CommingsoonAlert, ErrorAlert };