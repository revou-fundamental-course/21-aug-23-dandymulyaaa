const buttonKirim = document.querySelector('.kirim');
buttonKirim.addEventListener('click', () => {
  const namaHtml = document.querySelector('.label2');
  const tanggalHtml = document.querySelector('.label3')
  const pesanHtml = document.querySelector('.label4')
  let maleRadio = document.getElementById("maleRadio");
  let femaleRadio = document.getElementById("femaleRadio");
  document.querySelector('.outputNama').innerHTML = `<span>Nama : ${namaHtml.value}</span>`;
  document.querySelector('.outputtgllahir').innerHTML = `<span>Tanggal Lahir : ${tanggalHtml.value}</span>`;
  document.querySelector('.outputpesan').innerHTML = `<span>Pesan : ${pesanHtml.value}</span>`;
  if (maleRadio.checked) {
    document.querySelector('.outputjeniskelamin').innerHTML = '<span>Jenis Kelamin : Laki-Laki</span>'
  } else if (femaleRadio.checked) {
    document.querySelector('.outputjeniskelamin').innerHTML = '<span>Jenis Kelamin : Perempuan</span>'
  }
  let dateNowElement = document.querySelector('.outputDateNow');
  function updateDateNow() {
    let now = new Date();
    let options = { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    };
    let formattedDate = now.toLocaleString('en-US', options);
    dateNowElement.innerHTML = `<span>Waktu Saat Ini:  ${formattedDate}</span>`;

    document.querySelector('#titlename').innerHTML = namaHtml.value;
  }
  updateDateNow();
})

const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });





