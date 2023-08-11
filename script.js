document.addEventListener("DOMContentLoaded", function () {
  const deliveryForm = document.getElementById("deliveryForm");
  const notaCard = document.getElementById("notaCard");
  const downloadButton = document.getElementById("downloadButton");

  deliveryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaPengirim = document.getElementById("namaPengirim").value;
    const alamatPengirim = document.getElementById("alamatPengirim").value;
    const kontakPengirim = document.getElementById("kontakPengirim").value;

    const namaPenerima = document.getElementById("namaPenerima").value;
    const alamatPenerima = document.getElementById("alamatPenerima").value;
    const kontakPenerima = document.getElementById("kontakPenerima").value;

    document.getElementById("cardNamaPengirim").textContent = namaPengirim;
    document.getElementById("cardAlamatPengirim").textContent = alamatPengirim;
    document.getElementById("cardKontakPengirim").textContent = kontakPengirim;

    document.getElementById("cardNamaPenerima").textContent = namaPenerima;
    document.getElementById("cardAlamatPenerima").textContent = alamatPenerima;
    document.getElementById("cardKontakPenerima").textContent = kontakPenerima;

    notaCard.style.display = "block";

    html2canvas(notaCard).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      downloadButton.style.display = "block";

      downloadButton.onclick = function () {
        const a = document.createElement("a");
        a.href = imgData;
        a.download = `${namaPenerima}_nota_pengiriman.jpg`; // Nama file sesuai dengan nama penerima
        a.click();
        downloadButton.style.display = "none";
      };
    });
  });
});
